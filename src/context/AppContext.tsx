import {
  createContext, useContext,
} from 'react';
import { CssBaseline } from '@mui/material';

const ThemeContext = createContext('');

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function AppContextProvider({ children } : typeof children) {
  return (
    <ThemeContext.Provider value="">
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeContext.Provider>
  );
}
