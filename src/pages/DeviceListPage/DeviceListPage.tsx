import {FC} from 'react';
import { CustomContainer } from './styles';
import AppBar from '../../components/AppBar/AppBar';
import SideBar from '../../components/SideBar/SideBar';
import DeviceList from '../../components/DeviceList/DeviceList';


const DeviceListPage: FC = () => {
  return (
    <CustomContainer>
      <AppBar/>
      <SideBar/>
      <DeviceList/>
    </CustomContainer> 
  );
}

export default DeviceListPage;

