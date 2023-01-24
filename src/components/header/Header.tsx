import {
  AppBar, ButtonBase, TextField, Toolbar,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ChangeEvent, useState } from 'react';
import { useTodo } from '../../context/AppDataContext';

export default function Header() {
  const { addTodo } = useTodo();

  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleClick = () => {
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <AppBar>
      <Toolbar>
        <TextField label="Todo name" onChange={handleChange} value={value} required />
        <ButtonBase onClick={handleClick} disabled={!value}>
          <AddIcon fontSize="large" />
        </ButtonBase>
      </Toolbar>
    </AppBar>
  );
}
