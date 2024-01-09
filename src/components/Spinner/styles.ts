import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

export const CustomSpinner = styled(CircularProgress)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 500;
`
