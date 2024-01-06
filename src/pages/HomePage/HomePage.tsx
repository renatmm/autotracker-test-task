import {FC} from 'react';
import { CustomContainer } from './styles';
import SideBar from "../../components/SideBar/SideBar"
import AppBar from '../../components/AppBar/AppBar';


const HomePage: FC = () => {
  return (
    <CustomContainer>
      <SideBar/>
      <AppBar/>
    </CustomContainer> 
  )
}

export default HomePage;