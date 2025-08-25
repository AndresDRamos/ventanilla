# Copilot Instructions - Ventanilla CH v2.0

## 🏗️ System Architecture

Feature-based modular architecture with centralized styling and strict separation of concerns.

### Tech Stack

- **Frontend**: React 18.2 + Vite
- **Styling**: styled-components with ThemeContext
- **Backend**: Supabase (PostgreSQL)
- **State**: Context API with custom hooks
- **Architecture**: Feature-based modules

## 📁 Project Structure

```
src/
├── core/          # Core system (contexts, constants, providers)
├── features/      # Feature modules (auth, tickets, responses, users)
├── shared/        # Shared components and utilities
├── pages/         # Page components (employee/, admin/)
├── services/      # Global services (api, email, token)
├── styles/        # Centralized theming system
└── routing/       # Routing configuration
```

## 🗄️ Database Schema

```sql
-- Users & Auth
usuarios: idUsuario*, nombre, usuario, correo, contraseña, idRol→, idPlanta→, fechaRegistro, bActivo
roles: idRol*, rol (1=admin, 2=supervisor, 3=delegated)
empleados: idEmpleado*, codigoEmpleado, nombre, idPlanta→, idEsquemaPago→

-- Tickets
tickets: idTicket*, idTipoSolicitud→, idPrioridad→, descripcion, idEmpleado→, idEstado→, inicio, fin
estados: idEstado*, estado (1=new, 2=assigned, 3=attended, 4=closed, 5=cancelled)
prioridades: idPrioridad*, prioridad
tiposSolicitud: idTipoSolicitud*, tipoSolicitud, bActivo

-- Assignments & Responses
asignaciones: idAsignacion*, idUsuario→, idPlanta→, idTipoSolicitud→
responsables: idResponsable*, idTicket→, idUsuario→, token, inicio, fin, bActivo
atenciones: idAtencion*, idTicket→, idUsuario→, fecha, respuesta, calificacion, comentario

-- Catalogs
plantas: idPlanta*, planta
esquemasPago: idEsquemaPago*, esquemaPago
```

## 🔄 Core Workflows

### Employee Flow

1. Login with employee code → Auto-register if new
2. Dashboard shows pending/attended tickets
3. Create ticket → Auto-assigns based on asignaciones rules
4. Rate closed tickets (1-3 stars)

### Admin Flow

1. Login with username/password
2. Dashboard filtered by role permissions
3. Three actions per ticket:
   - Respond directly (estado: 1→3)
   - Reassign to role=3 user (estado: 1→2)
   - Cancel with reason (estado: 1→5)

### Token System

- Generated on assignment/reassignment
- Stored in responsables.token
- Invalidated (bActivo→false) on action completion
- Email contains secure link with token

## 🎨 Styling Guidelines

### Use ThemeContext

```jsx
import { useTheme } from "@/core/contexts/ThemeContext";

const Component = () => {
  const { theme, getStatusColor } = useTheme();
  return <div style={{ color: getStatusColor(1) }}>New</div>;
};
```

### Styled Components Pattern

```jsx
// Always use transient props ($prefix)
const StyledDiv = styled.div`
  color: ${(props) => (props.$active ? "blue" : "gray")};
`;
<StyledDiv $active={true} />;
```

## 📋 Development Patterns

### Feature Module Structure

```
features/[feature]/
├── components/    # Feature-specific components
├── hooks/         # Feature-specific hooks
├── services/      # API and business logic
└── utils/         # Helper functions
```

### Custom Hook Pattern

```javascript
// Encapsulate feature logic
export const useFeature = (options) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // Always return consistent interface
  return { data, loading, error, refetch };
};
```

### Service Layer Pattern

```javascript
// Centralize API calls and business logic
export const featureService = {
  async get(id) {
    /* ... */
  },
  async create(data) {
    /* ... */
  },
  async update(id, data) {
    /* ... */
  },
  async delete(id) {
    /* ... */
  },
};
```

## 🚀 Best Practices

1. **Component Composition**: Small, focused components
2. **Error Boundaries**: Wrap features in ErrorBoundary
3. **Loading States**: Always show loading feedback
4. **Optimistic Updates**: Update UI before API confirms
5. **Type Safety**: Use PropTypes or TypeScript
6. **Accessibility**: ARIA labels, keyboard navigation
7. **Performance**: Memo, useCallback, useMemo where needed

## 🐛 Common Issues & Solutions

### Timezone Handling

Use dateUtils.formatMexicanDate() for consistent timezone display

### Role-Based Access

Check user.idRol in components:

- 1 = Full admin access
- 2 = Supervisor (assigned tickets only)
- 3 = Delegated (active assignments only)

### Token Validation

Always check responsables.bActivo AND token match before allowing actions

## 📝 Git Commit Convention

```
feat: New feature
fix: Bug fix
docs: Documentation
style: Formatting
refactor: Code restructuring
test: Tests
chore: Maintenance
```
