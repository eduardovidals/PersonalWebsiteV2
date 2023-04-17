import { createTheme } from '@mui/material/styles'
import { orange, red } from '@mui/material/colors'

const theme = ({ mode }: { mode: 'light' | 'dark' }) => createTheme({
  status: {
    danger: red[500],
  },
  palette: {
    mode
  },
})

export default theme
