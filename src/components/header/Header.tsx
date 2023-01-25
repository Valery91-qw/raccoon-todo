import {
  AppBar, ButtonBase, IconButton, TextField, Toolbar,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, {
  ChangeEvent, useState,
} from 'react';
import { useTodo } from '../../context/appDataContext/AppDataContext';

export default function Header() {
  const { addTodo } = useTodo();

  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleAddTodo = (
    e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (!value) return;
    if (e.key === 'Enter' || e.currentTarget.type === 'button') {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <AppBar>
      <Toolbar>
        <TextField label="Todo title" onChange={handleChange} onKeyDown={(e) => handleAddTodo(e)} value={value} required={!value} />
        <IconButton onClick={(e) => handleAddTodo(e)} disabled={!value}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
