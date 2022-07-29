
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/index";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import './global.css';

export function App() {
  return (
    <AppThemeProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </AppThemeProvider>
  );
}
