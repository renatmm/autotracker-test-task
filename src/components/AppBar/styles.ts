import { APP_BAR_WIDTH } from '../../constants/global'
import styled from '@emotion/styled'
import AppBar from '@mui/material/AppBar'

export const CustomAppBar = styled(AppBar)`
  width: calc(100% - ${APP_BAR_WIDTH});
`