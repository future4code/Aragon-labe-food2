import { createMuiTheme } from '@material-ui/core/styles'
import { primaryColors, secondaryColors } from './colors'


export const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColors,
      contrastText: "#000000"
    },
    secondary: {
      main: secondaryColors,
      contrastText: "#000000"
    },
    text: {
      primary: "#000000"
    }
  }
});
