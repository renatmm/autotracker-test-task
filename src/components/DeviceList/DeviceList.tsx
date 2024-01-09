import { FC } from 'react';
import DialogModal from '../DialogModal/DialogModal';
import DeviceListItem from '../DeviceItem/DeviceItem';
import { CustomButton } from './styles';
import { TABLE_TITLE, ERROR_MESSAGE } from '../../constants/global';
import { Device } from '../../interfaces/interfaces';
import {Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper} from '@mui/material';

interface DeviceListProps {
  searchedDevices: Device[];
  isModalOpen: boolean;
  handleAddObj: () => void;
  handleDeleteObj: (id: number) => void;
  handleModalClose: () => void;
}

const DeviceList: FC<DeviceListProps> = ({searchedDevices, isModalOpen, handleAddObj, handleDeleteObj, handleModalClose}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="device-table">
        <TableHead>
          <TableRow>
            {TABLE_TITLE.map(title => (
              <TableCell key={title.id}>{title.name}</TableCell>
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
  );
}

export default DeviceList;
