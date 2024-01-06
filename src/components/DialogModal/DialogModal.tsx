import { FC } from 'react';
import {Modal} from '@mui/material';
import { CustomBox, CustomTypography } from './styles';
import { IErorMessage } from '../../interfaces';

interface ErrorModalProps {
  isModalOpen: boolean;
  content: IErorMessage;
  handleModalClose: () => void;
}

const ErrorModal: FC<ErrorModalProps> = ({isModalOpen, handleModalClose, content}) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CustomBox>
        <CustomTypography id="modal-modal-title" variant="h6">
          {content.errorTitle}
        </CustomTypography>
        <CustomTypography id="modal-modal-description">
          {content.errorText}
        </CustomTypography>
      </CustomBox>
    </Modal>
  );
}

export default ErrorModal;