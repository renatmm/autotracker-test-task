import {FC} from 'react';
import { HomePageContainer } from './styles';
import SideBar from "../../components/SideBar/SideBar"
import AppBar from '../../components/AppBar/AppBar';

const HomePage: FC = () => {
  return (
    <HomePageContainer>
      <SideBar/>
      <AppBar/>
    </HomePageContainer> 
  )
}

export default HomePage;