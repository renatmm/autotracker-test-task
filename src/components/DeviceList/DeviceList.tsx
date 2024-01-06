import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import DialogModal from '../DialogModal/DialogModal';
import { Device } from '../../interfaces';
import { CustomButton, CustomWrapper } from './styles';
import { TABLE_TITLE, ERROR_MESSAGE } from '../../constants/global';
import {getData, postObj, deleteObj} from '../../api/api'
import DeviceListItem from '../DeviceListItem/DeviceListItem';
import {Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper} from '@mui/material';

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
    <CustomWrapper>
      <SearchBar onHandleSearch={handleSearch} />
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
    </CustomWrapper>
  );
}

export default DeviceList;
