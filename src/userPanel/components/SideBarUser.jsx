import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { Box, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { 
  ShoppingBagOutlined as ShoppingBagIcon,
  FavoriteBorderOutlined as FavoriteIcon,
  Place as PlaceIcon,
  Payment as PaymentIcon,
  Person as PersonIcon,
} from "@mui/icons-material"
import './styleComponents.css'

const ListItemLink = ({ to, icon: Icon, primary }) => (
  <NavLink to={to} activeClassName="active-link" style={{ textDecoration: 'none', color: 'inherit' }}>
    <ListItemButton>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={primary} />
    </ListItemButton>
  </NavLink>
);

export const SideBarUser = () => {
  return (
    <Grid 
      item 
      xs={12} 
      md={12}
      lg={4}
      sx={{display: 'flex', justifyContent: 'right', alignItems: 'flex-start'}}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          m: 4,
          p: 5,
          borderRadius: 4,
          backgroundColor: '#fff',
          width: { xs: '100%'}
        }}
      >
        <List component="div">
          <Typography variant="h6">DashBoard</Typography>
          <ListItemLink to="/user/order" icon={ShoppingBagIcon} primary="Ordenes" />
          <ListItemLink to="/user/wishlist" icon={FavoriteIcon} primary="Lista de deseos" />
        </List>
        <List component="div">
          <Typography variant="h6">Configuracion de Perfil</Typography>
          <ListItemLink to="/user" icon={PersonIcon} primary="Información personal" />
          <ListItemLink to="/user/address" icon={PlaceIcon} primary="Direcciones" />
        </List>
      </Box>
    </Grid>
  )
}