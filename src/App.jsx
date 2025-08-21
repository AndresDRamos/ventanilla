import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import AppContent from "./AppContent.jsx";

function App() {
  return (
    <BrowserRouter basename="/ventanilla">
      <GlobalStyles />
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
