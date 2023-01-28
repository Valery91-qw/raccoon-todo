import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import paletteStyles from './palette.styles';
import componentsTheme from './components.styles';

const theme = createTheme({
  palette: paletteStyles,
  components: { ...componentsTheme.components },
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
