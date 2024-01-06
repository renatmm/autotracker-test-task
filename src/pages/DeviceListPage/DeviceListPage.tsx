import * as React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import SideBar from '../../components/SideBar/SideBar';
import DeviceList from '../../components/DeviceList/DeviceList';
import { CustomContainer } from './styles';

const DeviceListPage: React.FC = () => {
  return (
    <CustomContainer>
      <AppBar/>
      <SideBar/>
      <DeviceList/>
    </CustomContainer> 
  );
}

export default DeviceListPage;

