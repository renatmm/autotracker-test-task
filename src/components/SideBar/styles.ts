import { APP_BAR_WIDTH } from '../../constants/global'
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

export const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: ${APP_BAR_WIDTH};
  }
`
export const CustomMenuIcon = styled(MenuIcon)`
    padding: 12px;
`

export const CustomNavLink = styled(NavLink)`
    .MuiSvgIcon-root {
        color: grey;
        padding: 12px;
    }

    &.active {
        .MuiSvgIcon-root {
            background-color: #1976d2;
            border-radius: 15px;
            color: #fff;
        }
    }
`;