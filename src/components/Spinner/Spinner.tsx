import { FC } from 'react';
import { SpinnerWrapper } from './styles';
import { CircularProgress } from '@mui/material';

const Spinner: FC = () => {
  return (
    <SpinnerWrapper>
      <CircularProgress/>
    </SpinnerWrapper>
  );
}

export default Spinner;