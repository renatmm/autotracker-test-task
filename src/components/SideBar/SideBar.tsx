import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { NavLink } from 'react-router-dom';
import './style.css'

const SideBar: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            width: 60,
          },
        }} 
        variant="permanent"
        anchor="left"
      >
        <IconButton>
            <MenuIcon sx={{ minHeight: 48, px: 2.5 }}/>
        </IconButton>
        <Divider />
        <IconButton>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            <HouseOutlinedIcon sx={{ minHeight: 48, px: 2.5, textDecoration:'none' }}/>
          </NavLink>
        </IconButton>
        <IconButton>
        <NavLink to="/device-list" className={({ isActive }) => (isActive ? 'active' : '')}>
            <ListAltIcon sx={{ minHeight: 48, px: 2.5 }}/>
          </NavLink>
        </IconButton>
      </Drawer>
    </Box>
  );
}

export default SideBar;

