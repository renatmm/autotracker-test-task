import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NAV_ITEMS } from '../../constants/global';
import { CustomAppBar } from './styles';

interface AppBarProps {
}

const AppBar: React.FC<AppBarProps> = () => {
  return (
      <CustomAppBar>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item}
                sx={{ color: 'white', display: 'block' }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit" >
              <AccountCircle sx={{ fontSize: 30 }}/>
            </IconButton>
            <IconButton size="small" color="inherit" sx={{ fontSize: 16 }}>
              renat@example.com
            </IconButton>
            <IconButton size="small" color="inherit">
              <KeyboardArrowDownIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </CustomAppBar>
  );
}

export default AppBar;