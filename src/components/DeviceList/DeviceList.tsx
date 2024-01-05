import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SearchBar from '../SearchBar/SearchBar';
import ErrorModal from '../ErrorModal/ErrorModal';
import { Device } from '../../interfaces';
import { TABLE_TITLE } from '../../constants/global';
import {getData, postObj, deleteObj} from '../../api/api'
import DeviceListItem from '../DeviceListItem/DeviceListItem';


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
    <>
      <SearchBar onHandleSearch={handleSearch} />
      <TableContainer component={Paper}>
        <Table aria-label="Таблица устройств">
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
        <Button
          onClick={handleAddObj}
          variant='contained'
          sx={{ p: 1, m: 1 }}
        >
            Добавить
        </Button>
        <ErrorModal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />
      </TableContainer>
    </>
  );
}

export default DeviceList;
