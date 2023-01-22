import {
  createContext,
} from 'react';
import { CssBaseline } from '@mui/material';

const ThemeContext = createContext('');

export default function AppContextProvider({ children } : typeof children) {
  return (
    <ThemeContext.Provider value="">
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeContext.Provider>
  );
}
