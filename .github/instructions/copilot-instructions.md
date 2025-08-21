# Copilot Instructions - Ventanilla CH

## System Architecture Overview
This is a React + Vite ticket management system with Supabase backend for EZI company. The app provides dual authentication (employees/administrators) with role-based access control and complex ticket workflow management.

### Core Architecture
- **Frontend**: React 18.2 + Vite with styled-components
- **Backend**: Supabase with PostgreSQL database
- **Authentication**: Custom dual-path authentication via AuthContext
- **State Management**: React Context API + custom hooks pattern
- **Routing**: Conditional rendering based on user type (no react-router)
- **Styling**: styled-components with CSS custom properties + mobile-first approach

## Database Schema (Supabase)
```
empleados: idEmpleado, codigoEmpleado, nombre, idPlanta, idEsquemaPago
tickets: idTicket, idEmpleado, idTipoSolicitud, descripcion, idPrioridad, idEstado
plantas: idPlanta, planta
usuarios: idUsuario, nombre, usuario, contraseña, idRol (1=admin, 2=supervisor, 3=delegated)
atenciones: idAtencion, idTicket, respuesta, calificacion, comentario
asignaciones: idAsignacion, idUsuario, idPlanta, idTipoSolicitud
seguimientos: idSeguimiento, idTicket, idUsuario, idEstado, fecha (tracks all state changes)
delegaciones: idDelegacion, idTicket, idUsuario, bActivo (tracks ticket assignments)
estados: idEstado, estado (1=new, 2=delegated, 3=attended, 4=closed, 5=cancelled)
```

## Key Development Patterns

### 1. Authentication Flow
- Entry point: `LoginPage` with tab switching between employee/admin access
- Employee login: Code lookup → auto-register if not found → redirect to `EmployeeTicketsPage`
- Admin login: Username/password validation → redirect to `AdminDashboard`
- State managed in `AuthContext` with localStorage persistence

### 2. Custom Hooks Pattern - MOVED TO `/src/hooks/`
All data operations use custom hooks now located in `/src/hooks/`:
- `useEmployeeTickets.js` - Employee ticket CRUD + rating system
- `useAdminTickets.js` - Admin ticket management with role-based filtering
- `useEmpleados.js` - Employee management operations
- `useTickets.js` - Base ticket operations + dropdown data
- `useUsuariosAtencion.js` - User tracking for ticket attendance
- `useSeguimientos.js` - State change tracking system

### 3. Ticket State Management (CRITICAL)
**5-State Workflow**: 1=new → 2=delegated → 3=attended → 4=closed → 5=cancelled
- All state changes tracked in `seguimientos` table with user and timestamp
- `delegaciones` table tracks active assignments (`bActivo` flag)
- Role-based visibility: idRol=1 (full access), idRol=2 (assigned only), idRol=3 (delegated only)

### 4. Styled Components Convention
**CRITICAL**: Always use transient props ($ prefix) to prevent React warnings:
```jsx
// ✅ Correct
const StyledButton = styled.button`
  color: ${props => props.$active ? 'blue' : 'gray'};
`;
<StyledButton $active={isActive}>Click me</StyledButton>

// ❌ Incorrect - causes React warnings
const StyledButton = styled.button`
  color: ${props => props.active ? 'blue' : 'gray'};
`;
<StyledButton active={isActive}>Click me</StyledButton>
```

### 5. Component Architecture
- `TicketCard`: Unified component with mode prop ("admin"|"employee")
- `TicketModal`: Multi-mode modal (view/response/attend) with role-based features
- `StatsSection`: Admin dashboard statistics with state-based filtering
- Modal pattern: State in parent, pass ticket + onClose callback
- Error boundaries: Use ErrorBoundary wrapper for components

### 6. Date Handling (Mexico Timezone)
Use `formatMexicanDate()` from `dateUtils.js` - implements manual parsing to avoid timezone conversion issues with Supabase UTC dates:
```javascript
// Handles: "2025-08-19T09:29:52.726772+00:00" → "19/08/2025, 09:29"
const formatMexicanDate = (dateString) => {
  if (dateString.includes('T') && dateString.includes('+00:00')) {
    // Manual parsing to preserve UTC time as Mexico local time
  }
}
```

## Development Commands & Workflows

### Essential Commands
```bash
# Development server
npm run dev

# Build for production  
npm run build

# Deploy to GitHub Pages (configured for /ventanilla/ base)
npm run deploy
```

### Role-Based Filtering (Critical for Admin Dashboard)
- idRol=1: Full access to all tickets
- idRol=2: Only tickets matching user's `asignaciones` (planta + tipo combinations)  
- idRol=3: Only tickets in active `delegaciones` for that user
- Filtering logic in `useAdminTickets.js` applies automatically after data fetch

### Complex Query Patterns
Always include nested relationships for complete ticket data:
```javascript
const { data } = await supabase.from('tickets').select(`
  *,
  empleados (nombre, plantas (planta)),
  tiposSolicitud (tipoSolicitud),
  atenciones (respuesta, calificacion, comentario),
  seguimientos (fecha, idEstado, usuarios (nombre)),
  delegaciones (bActivo, usuarios (nombre))
`);
```

## File Structure Conventions
- `/src/pages/` - Route-level components (AdminDashboard, EmployeeTicketsPage, LoginPage)
- `/src/components/` - Reusable UI components with styled-components
- `/src/hooks/` - Custom hooks and data operations (moved from utils)
- `/src/contexts/` - React Context providers
- `/src/styles/` - Global styles with estado/prioridad color variables

## Critical Workflows

### 1. Ticket State Transitions
Every state change requires:
1. Insert `seguimiento` record with idUsuario, idTicket, idEstado
2. Update ticket.idEstado 
3. Handle delegation/assignment in `delegaciones` table if applicable

### 2. Employee Rating System
Closed tickets (idEstado=4) show rating interface:
- 1-3 star rating stored in `atenciones.calificacion`
- Optional comment in `atenciones.comentario`
- Updates via `calificarTicket()` function with transaction handling

### 3. Migration Pattern
Auto-migration for tickets missing initial `seguimientos`:
- Checks for idEstado=1 seguimiento on ticket fetch
- Creates missing records inline with null idUsuario
- Implemented in `useAdminTickets.js` fetchTickets function

## Common Gotchas & Solutions

### 1. Estado-Based Colors
Use CSS custom properties from `GlobalStyles.jsx`:
```jsx
border-left: 4px solid var(--color-estado-${estadoName});
background: var(--color-estado-${estadoName}-bg);
```

### 2. Delegated Ticket Display
For idEstado=2 tickets in employee view, show delegated user name instead of assigned responsible:
```javascript
const getUsuarioDelegado = (ticket) => {
  if (ticket.idEstado === 2) {
    return ticket.delegaciones?.find(d => d.bActivo)?.usuarios?.nombre;
  }
  return null;
};
```

### 3. Modal Footer Visibility
Never show footer buttons for closed tickets (idEstado=4):
```javascript
{mode !== "response" && ticket.idEstado !== 4 && (
  <ModalFooter>...</ModalFooter>
)}
```

## Integration Points
- Supabase configuration in `supabase.config.jsx`
- CSS custom properties defined in `GlobalStyles.jsx`
- AuthContext provides user state across all components
- Error handling via try/catch in hooks with user-friendly messages

When editing this system, prioritize maintaining the state transition integrity, respecting role-based permissions, and preserving the ticket workflow audit trail through seguimientos.
