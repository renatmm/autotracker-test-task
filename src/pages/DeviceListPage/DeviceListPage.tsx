import * as React from 'react';
import Grid from '@mui/material/Grid';
import AppBar from '../../components/AppBar/AppBar';
import SideBar from '../../components/SideBar/SideBar';
import DeviceList from '../../components/DeviceList/DeviceList';

const DeviceListPage: React.FC = () => {
  return (
    <Grid container>
      <Grid item>
        <SideBar/>
      </Grid>
      <Grid item xs={12} sx={{ml: '60px'}}>
        <AppBar />
        <Grid item>
          <DeviceList/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DeviceListPage;

