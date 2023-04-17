import { styled } from '@mui/material'

export const MainContainer = styled('main')`
  display: flex;
  flex: 1;
`

// child container is used to prevent horizontal overflow, cannot be applied to main container
// due to aos animations bugging out
export const MainChildContainer = styled('div')`
  display: flex;
  flex: 1;
  min-width: 0;
  padding-top: 70px;
  height: 100%;
`
