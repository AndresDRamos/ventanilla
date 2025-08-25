import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ErrorBoundary } from '../../shared/components/ErrorBoundary';

/**
 * Proveedor principal que envuelve toda la aplicación con los contextos necesarios
 * Esto centraliza la configuración de proveedores y mantiene un orden específico
 */
export const AppProvider = ({ children }) => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default AppProvider;
