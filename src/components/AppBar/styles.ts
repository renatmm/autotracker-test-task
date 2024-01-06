import { APP_BAR_WIDTH } from '../../constants/global'
import styled from '@emotion/styled'
import {AppBar, Box, Button} from '@mui/material'

export const CustomAppBar = styled(AppBar)`
  width: calc(100% - ${APP_BAR_WIDTH});
`

export const CustomButton = styled(Button)`
  display: block;
  color: white;
`

export const CustomBox= styled(Box)`
  flex-grow: 1;
  display: flex;
`