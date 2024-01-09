import { APP_BAR_EMAIL, NAV_ITEMS } from '../../constants/global';
import { CustomAppBar, CustomBox, CustomButton } from './styles';
import {Toolbar, IconButton, Box} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AppBar: React.FC = () => {
  return (
      <CustomAppBar>
        <Toolbar>
        <CustomBox>
            {NAV_ITEMS.map(item => (
              <CustomButton key={item.id}>
                {item.name}
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