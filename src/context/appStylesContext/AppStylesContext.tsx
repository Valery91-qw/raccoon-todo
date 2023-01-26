import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import paletteStyles from './palette.styles';

const theme = createTheme({
  ...paletteStyles,
  //  --Components--
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#0288d1',
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: '#2e7d32',
          },
        },
        track: {
          opacity: 0.2,
          backgroundColor: '#0288d1',
          '.Mui-checked.Mui-checked + &': {
            opacity: 0.7,
            backgroundColor: '#2e7d32',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#ffffff',
          },
        },
      },
    },
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
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeProvider>
  );
}
