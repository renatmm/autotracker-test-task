import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from '../SearchBar/SearchBar';
import { Device } from '../../interfaces';
import { DEVICES, TABLE_TITLE } from '../../constants/global';

const DeviceList: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>(DEVICES);
  const [searchedDevices, setSearchedDevices] = useState<Device[]>(devices);

  const handleSearch = (searchId: string | '') => {
    if (!searchId) {
      setSearchedDevices(devices);
    }
    const filteredList = devices.filter(device =>
      device.id.toLowerCase().includes(searchId.toLowerCase())
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
              <TableRow key={device.id}>
                <TableCell>{device.id}</TableCell>
                <TableCell>{device.name}</TableCell>
                <TableCell>{device.uniqueId}</TableCell>
                <TableCell>{device.status}</TableCell>
                <TableCell>{device.lastUpdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DeviceList;
