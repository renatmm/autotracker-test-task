import { FC } from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { Device } from "../../interfaces";

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