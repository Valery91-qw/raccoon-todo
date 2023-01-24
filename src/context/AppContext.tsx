import {
  createContext,
} from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext('');

const theme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        position: 'sticky',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
  },
});

export default function AppContextProvider({ children } : typeof children) {
  return (
    <ThemeContext.Provider value="">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          {children}
        </CssBaseline>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
