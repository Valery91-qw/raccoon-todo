import {
  createContext,
} from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import paletteStyles from './palette.styles';

const ThemeContext = createContext('');

const theme = createTheme({
  ...paletteStyles,
  //  --Components--
  components: {
    MuiAppBar: {
      defaultProps: {
        position: 'sticky',
        color: 'primary',
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#ffffff',
          },
          '& .MuiFormLabel-asterisk': {
            color: 'rgba(255,0,0,0.83)',
          },
        },
      },
      defaultProps: {
        variant: 'standard',
      },
    },
  },
});

export default function AppStylesContextProvider({ children } : typeof children) {
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
