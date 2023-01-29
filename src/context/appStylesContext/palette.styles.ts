import createPalette from '@mui/material/styles/createPalette';

const paletteStyles = createPalette({
  action: {
    active: '#ffffff',
    disabled: 'rgba(255,255,255,0.40)',
  },
  text: {
    primary: '#ffffff',
    secondary: '#121212',
  },
  background: {
    default: '#121212',
    paper: '#333333',
  },
  primary: {
    main: '#333333',
    contrastText: '#ffffff',
  },
});

export default paletteStyles;
