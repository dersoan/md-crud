import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme, Icon, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { PropsWithChildren } from 'react'
import { useDrawerContext } from '../../contexts';

interface IMenuLateralProps{
  children?: React.ReactNode;
}


export const MenuLateral: React.FC<PropsWithChildren<IMenuLateralProps>> = (props) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
 
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
   
    <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
     <Box width={theme.spacing(28)} display="flex" flexDirection="column" >
     
     <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
     <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
      src="https://i.pinimg.com/originals/04/c7/09/04c709eec852f4b2204284037c4ab452.jpg" /> 
     </Box>
     
     <Divider />
     <Box flex={1}>
<List>
  <ListItemButton>
    <ListItemIcon>
<Icon>home</Icon>
    </ListItemIcon>
    <ListItemText primary="Pagina Inicial" />
  </ListItemButton>
</List>
     </Box>
     
     
     </Box>
    </Drawer>
    <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
    {props.children}
    </Box>
   
   </> 
  );

}; 