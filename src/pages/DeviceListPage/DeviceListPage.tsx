import { useState, useEffect, FC } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import SideBar from '../../components/SideBar/SideBar';
import DeviceList from '../../components/DeviceList/DeviceList';
import Spinner from '../../components/Spinner/Spinner';
import BtnTabs from '../../components/BtnTabs/BtnTabs';
import SearchBar from '../../components/SearchBar/SearchBar';
import Select from '../../components/Select/Select';
import { deleteObj, getData, postObj } from '../../api/api';
import { Device } from '../../interfaces/interfaces';
import { DeviceListPageContainer, SearchWrapper, TableManageWraper } from './styles';
import { Box, IconButton } from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import WidthNormalOutlinedIcon from '@mui/icons-material/WidthNormalOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const DeviceListPage: FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [searchedDevices, setSearchedDevices] = useState<Device[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    handleFetchData()
  }, [])

  const handleFetchData = async () => {
    const data = (await getData()).data;
    setDevices(data);
    setSearchedDevices(data);
    setIsLoading(false);
  }

  const handleAddObj = async () => {
    try {
      const res = (await postObj()).data
      console.log(res)
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
      setIsModalOpen(true)
    }
  }

  const handleDeleteObj = async (id: number) => {
    try {
      const res = (await deleteObj(String(id)))
      console.log(res)
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
      setIsModalOpen(true)
    }
  } 

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (searchId: string | '') => {
    if (!searchId) {
      setSearchedDevices(devices);
    }
    const filteredList = devices.filter(device =>
      device.id.toString().toLowerCase().includes(searchId.toLowerCase())
  )
  setSearchedDevices(filteredList)
};

  return (
    <DeviceListPageContainer>
      <AppBar/>
      <SideBar/>
      <TableManageWraper>
        <SearchWrapper>
          <SearchBar onHandleSearch={handleSearch} />
          <BtnTabs/>
          <Box>
            <IconButton>
              <WidthNormalOutlinedIcon />
            </IconButton>
            <IconButton>
              <FilterListOutlinedIcon />
            </IconButton>
            <IconButton >
              <DownloadOutlinedIcon />
            </IconButton>
          </Box>
        </SearchWrapper>
        <Select/>
      </TableManageWraper>
      {isLoading ? <Spinner/> :
      <DeviceList
        searchedDevices={searchedDevices}
        isModalOpen={isModalOpen}
        handleAddObj={handleAddObj}
        handleDeleteObj={handleDeleteObj}
        handleModalClose={handleModalClose}
      />}
    </DeviceListPageContainer> 
  );
}

export default DeviceListPage;

