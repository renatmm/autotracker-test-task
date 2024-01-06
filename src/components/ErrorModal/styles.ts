import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const CustomBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    padding: 40,
});
