import {Divider, Box, IconButton} from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import {CustomDrawer, CustomNavLink, CustomMenuIcon} from './styles';

const SideBar: React.FC = () => {
  return (
    <Box>
      <CustomDrawer variant="permanent">
        <IconButton>
          <CustomMenuIcon/>
        </IconButton>
        <Divider />

        <IconButton>
          <CustomNavLink to="/">
            <HouseOutlinedIcon/>
          </CustomNavLink>
        </IconButton>
        
        <IconButton>
          <CustomNavLink to="/device-list">
            <ListAltIcon/>
          </CustomNavLink>
        </IconButton>
      </CustomDrawer>
    </Box>
  );
}

export default SideBar;

