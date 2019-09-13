import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#C62828',
    },
    secondary: {
      main: '#1e1e1e',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#303030',
      default: '#202020',
    },
  },
  shape: {
    borderRadius: 2,
  },
});

export default theme;
