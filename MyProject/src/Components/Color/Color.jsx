import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f6685e',
      main: '#f44336',
      dark: '#aa2e25',
      contrastText: '#fff',
    },
    secondary: {
      light: '#33eaff',
      main: '#00e5ff',
      dark: '#00a0b2',
      contrastText: '#000',
    },
  },
});

export default theme;
