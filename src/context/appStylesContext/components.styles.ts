import { createTheme } from '@mui/material/styles';
import { keyframes } from '@mui/material';

const run = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const componentsTheme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          animation: `${run} 20s linear infinite`,
          backgroundColor: 'transparent',
          color: '#ffffff',
          fontSize: '1.2rem',
        },
        message: {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          maxWidth: 300,
          overflow: 'hidden',
          backgroundColor: '#333333',
          borderRadius: '5px',
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
        switchBase: ({ ownerState }) => (
          { color: ownerState.className === 'news' ? '#0288d1' : '#ff5a38' }
        ),
        colorPrimary: ({ ownerState }) => ({
          '&.Mui-checked': {
            color: ownerState.className === 'news' ? '#2e7d32' : '#2e7d32',
          },
        }),
        track: ({ ownerState }) => ({
          opacity: 0.2,
          backgroundColor: ownerState.className === 'news' ? '#0288d1' : '#ff5a38',
          '.Mui-checked.Mui-checked + &': {
            opacity: 0.7,
            backgroundColor: ownerState.className === 'news' ? '#2e7d32' : '#2e7d32',
          },
        }),
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
