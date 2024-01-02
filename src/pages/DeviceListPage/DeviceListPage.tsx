import * as React from 'react';
import Grid from '@mui/material/Grid';
import AppBar from '../../components/AppBar/AppBar';
import SideBar from '../../components/SideBar/SideBar';
// import SearchBar from '../../components/SearchBar/SearchBar';
import DeviceList from '../../components/DeviceList/DeviceList';

const DeviceListPage: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={0.4}>
        <SideBar/>
      </Grid>
      <Grid item xs={11.6}>
        <AppBar />
        {/* <Grid item>
          <SearchBar/>
        </Grid> */}
        <Grid item>
          <DeviceList/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DeviceListPage;

