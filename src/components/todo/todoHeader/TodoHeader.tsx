import {
  ButtonBase, CardContent, Typography,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import TodoHeaderMenu from './todoHeaderMenu/TodoHeaderMenu';

type TodoHeaderType = {
  todoId: string,
  title: string
};

export default function TodoHeader({ todoId, title } : TodoHeaderType) {
  const [element, seElement] = useState<undefined | null | HTMLElement>(null);
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    seElement(e.currentTarget);
  };

  const handleClose = () => {
    seElement(null);
  };

  return (
    <>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography fontSize={{
          sm: '1.5rem',
          xs: '1rem',
        }}
        >
          {title}
        </Typography>
        <ButtonBase onClick={handleOpen}>
          <SettingsIcon />
        </ButtonBase>
      </CardContent>
      <TodoHeaderMenu element={element} todoId={todoId} handleClose={handleClose} />
    </>
  );
}
