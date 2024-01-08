import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import DialogModal from '../DialogModal/DialogModal';
import { Device } from '../../interfaces';
import { CustomButton, TableWrapper, SearchWrapper } from './styles';
import { TABLE_TITLE, ERROR_MESSAGE } from '../../constants/global';
import {getData, postObj, deleteObj} from '../../api/api'
import DeviceListItem from '../DeviceItem/DeviceItem';
import {Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper, Box, IconButton} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BtnTabs from '../BtnTabs/BtnTabs';

const DeviceList: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [searchedDevices, setSearchedDevices] = useState<Device[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    handleFetchData()
 }, [])

  const handleFetchData = async () => {
    const data = (await getData()).data;
    setDevices(data);
    setSearchedDevices(data);
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
    <TableWrapper>
      <SearchWrapper>
        <SearchBar onHandleSearch={handleSearch} />
        <BtnTabs/>
        <Box>
          <IconButton>
            <PhoneIcon />
          </IconButton>

          <IconButton>
            <FavoriteIcon />
          </IconButton>

          <IconButton>
            <PersonPinIcon />
          </IconButton>
        </Box>
      </SearchWrapper>
      <TableContainer component={Paper}>
        <Table aria-label="device-table">
          <TableHead>
            <TableRow>
              {TABLE_TITLE.map((title, index) => (
                <TableCell key={index}>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {searchedDevices.map(device => (
              <DeviceListItem
                key={device.id}
                device={device}
                handleDeleteObj={handleDeleteObj}
              />
            ))}
          </TableBody>
        </Table>
        <CustomButton onClick={handleAddObj}>Добавить</CustomButton>
        <DialogModal
          content={ERROR_MESSAGE}
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />
      </TableContainer>
    </TableWrapper>
  );
}

export default DeviceList;
