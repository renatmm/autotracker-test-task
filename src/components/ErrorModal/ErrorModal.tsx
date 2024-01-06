import { FC } from 'react';
import {Modal, Typography} from '@mui/material';
import { CustomBox } from './styles';

interface ErrorModalProps {
  isModalOpen: boolean;
  handleModalClose: () => void;
}

const ErrorModal: FC<ErrorModalProps> = ({isModalOpen, handleModalClose}) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CustomBox>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          error
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          переделывайте
        </Typography>
      </CustomBox>
    </Modal>
  );
}

export default ErrorModal;