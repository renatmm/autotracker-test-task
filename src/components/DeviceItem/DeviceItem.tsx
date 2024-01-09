import { FC } from 'react';
import { Device } from "../../interfaces/interfaces";
import DeleteIcon from '@mui/icons-material/Delete';
import {TableRow, TableCell, IconButton} from "@mui/material";

interface DeviceListItemProps {
    device: Device
    handleDeleteObj: (id: number) => void;
}

const DeviceListItem : FC<DeviceListItemProps> = ({device, handleDeleteObj}) => {
    return ( 
        <TableRow>
            <TableCell>{device.id}</TableCell>
            <TableCell>{device.name}</TableCell>
            <TableCell>{device.username}</TableCell>
            <TableCell>{device.email}</TableCell>
            <TableCell>{device.address.city}</TableCell>
            <TableCell>
                <IconButton onClick={() => handleDeleteObj(device.id)}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
 
export default DeviceListItem;