import styled from '@emotion/styled';
import ButtonBase from '@mui/material/ButtonBase';

import { Box } from '@mui/material';

export const CustomWrapper = styled(Box)`
  margin-top: 100px
`

export const CustomButton = styled(ButtonBase)({
  backgroundColor: '#1976d2',
  borderRadius: 3,
  color: 'white',
  fontSize: '16px',
  maxHeight: 48,
  padding: '20px',
  margin: '10px',
});
