import { createTheme } from '@mui/material/styles';

const componentsTheme = createTheme({
  components: {
    MuiSnackbar: {
      styleOverrides: {
        root: {
          maxWidth: 300,
          overflow: 'hidden',
          backgroundColor: '#333333',
        },
      },
      defaultProps: {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          position: 'absolute',
          width: '100%',
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          margin: '0 10px',
          boxShadow: '0 0 20px #121212',
          borderRadius: '20px',
        },
      },
    },
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

export default componentsTheme;
