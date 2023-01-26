import {
  CardContent, IconButton, Typography,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import TodoHeaderMenu from './todoHeaderMenu/TodoHeaderMenu';
import todoHeaderStyles from './todoHeader.styles';
import { TodoHeaderOpenHandler, TodoHeaderStateType, TodoHeaderType } from './todoHeader.types';

export default function TodoHeader({ todoId, title } : TodoHeaderType) {
  const [element, seElement] = useState<TodoHeaderStateType>(null);
  const handleOpen = (e: TodoHeaderOpenHandler) => {
    seElement(e.currentTarget);
  };

  const handleClose = () => {
    seElement(null);
  };

  return (
    <>
      <CardContent sx={todoHeaderStyles.cardContent.sx}>
        <Typography fontSize={todoHeaderStyles.typography.fontSize}>
          {title}
        </Typography>
        <IconButton onClick={handleOpen}>
          <SettingsIcon />
        </IconButton>
      </CardContent>
      <TodoHeaderMenu element={element} todoId={todoId} handleClose={handleClose} />
    </>
  );
}
