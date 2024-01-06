import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { APP_BAR_EMAIL, NAV_ITEMS } from '../../constants/global';
import { CustomAppBar, CustomBox, CustomButton } from './styles';

const AppBar: React.FC = () => {
  return (
      <CustomAppBar>
        <Toolbar>
        <CustomBox>
            {NAV_ITEMS.map((item) => (
              <CustomButton key={item}>
                {item}
              </CustomButton>
            ))}
          </CustomBox>
          <Box>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>

            <IconButton color="inherit" >
              <AccountCircle/>
            </IconButton>

            <IconButton size="small" color="inherit">
              {APP_BAR_EMAIL}
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