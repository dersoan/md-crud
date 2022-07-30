import { BrowserRouter } from 'react-router-dom';
import { DrawerProvider, AppThemeProvider } from './shared/contexts';
import { MenuLateral } from './shared/components'; 
import { AppRoutes } from './routes/index';
import './global.css';

export const App = () => {
  return (
    <AppThemeProvider>
    <DrawerProvider>
    <BrowserRouter>
      <MenuLateral>
      <AppRoutes />
      </MenuLateral>


    </BrowserRouter>
    </DrawerProvider>
    </AppThemeProvider>
  );
}
