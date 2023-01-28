import {
  AppBar, IconButton, LinearProgress, TextField, Toolbar,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  useState,
} from 'react';
import { useTodo } from '../../context/appDataContext/AppDataContext';
import { useFetch } from '../../context/appQueryContext/AppQueryContextProvider';
import { EventHandlerAddTodoType, HandleChangeType } from './Header.types';

export default function Header() {
  const { addTodo } = useTodo();
  const { isLoading, isRefetching } = useFetch();

  const [value, setValue] = useState('');

  const handleChange = (e: HandleChangeType) => {
    setValue(e.currentTarget.value);
  };

  const handleAddTodo = (e: EventHandlerAddTodoType) => {
    if (!value) return;
    if (e.key === 'Enter' || e.currentTarget.type === 'button') {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <AppBar>
      <Toolbar>
        <TextField
          label="Todo title"
          onChange={handleChange}
          onKeyDown={(e) => handleAddTodo(e)}
          value={value}
          required={!value}
        />
        <IconButton onClick={(e) => handleAddTodo(e)} disabled={!value}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Toolbar>
      {(isLoading || isRefetching) && <LinearProgress />}
    </AppBar>
  );
}
