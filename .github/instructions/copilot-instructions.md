# Copilot Instructions - Ventanilla CH

## System Architecture Overview
This is a React + Vite ticket management system with Supabase backend for EZI company. The app provides dual authentication (employees/administrators) with role-based access control.

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
tickets: idTicket, idEmpleado, idTipoSolicitud, descripcion, idPrioridad, fechaCreacion, estado
plantas: idPlanta, planta
usuarios: idUsuario, nombre, usuario, contraseña, idRol (1=admin, 2=supervisor)
atenciones: idAtencion, idTicket, idUsuario, respuesta, fechaAtencion
asignaciones: idAsignacion, idUsuario, idPlanta, idTipoSolicitud
```

## Key Development Patterns

### 1. Authentication Flow
- Entry point: `LoginPage` with tab switching between employee/admin access
- Employee login: Code lookup → auto-register if not found → redirect to `EmployeeTicketsPage`
- Admin login: Username/password validation → redirect to `AdminDashboard`
- State managed in `AuthContext` with localStorage persistence

### 2. Custom Hooks Pattern
All data operations use custom hooks located in `/src/utils/`:
- `useEmployeeTickets.js` - Employee ticket CRUD operations
- `useAdminTickets.js` - Admin ticket management with filtering
- `useEmpleados.js` - Employee management operations
- `useTickets.js` - Base ticket operations + dropdown data (plantas, tipos, prioridades)

### 3. Styled Components Convention
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

### 4. Component Architecture
- `TicketCard`: Unified component with mode prop ("admin"|"employee") 
- `TicketModal`: Detailed ticket view with full information display
- Modal pattern: State in parent, pass ticket + onClose callback
- Error boundaries: Use ErrorBoundary wrapper for components

### 5. Date Handling (Mexico Timezone)
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

# Deploy to GitHub Pages
npm run deploy
```

### Role-Based Filtering (Critical for Admin Dashboard)
Non-admin users (idRol !== 1) can only see tickets assigned to their plantas/tipos via `asignaciones` table. The filtering logic in `useAdminTickets.js` applies this automatically.

### Environment Variables Required
```
VITE_APP_SUPABASE_URL=your_supabase_url
VITE_APP_ANON_KEY=your_supabase_anon_key
```

## File Structure Conventions
- `/src/pages/` - Route-level components (AdminDashboard, EmployeeTicketsPage, LoginPage)
- `/src/components/` - Reusable UI components with styled-components
- `/src/utils/` - Custom hooks and utilities  
- `/src/contexts/` - React Context providers
- `/src/styles/` - Global styles with CSS custom properties

## Common Gotchas & Solutions

### 1. Mobile Responsiveness
Always include mobile breakpoints in styled-components:
```jsx
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
```

### 2. Supabase Relationships  
Use nested selects for foreign key relationships:
```javascript
const { data } = await supabase
  .from('tickets')
  .select(`
    *,
    empleados (nombre, plantas (planta)),
    tiposSolicitud (tipoSolicitud)
  `);
```

### 3. Component Mode Pattern
Many components accept a `mode` prop to handle admin vs employee behavior:
```jsx
<TicketCard 
  ticket={ticket}
  mode="admin" // or "employee"
  onCardClick={handleClick}
/>
```

## Integration Points
- Supabase configuration in `supabase.config.jsx`
- CSS custom properties defined in `GlobalStyles.jsx`
- AuthContext provides user state across all components
- Error handling via try/catch in hooks with user-friendly messages

When editing this system, prioritize maintaining the dual authentication flow, respecting role-based permissions, and preserving the mobile-responsive design patterns.
