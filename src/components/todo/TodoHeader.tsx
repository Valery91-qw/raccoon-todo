import {
  ButtonBase, CardContent, Menu, MenuItem, Typography,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import { useTodo } from '../../context/AppDataContext';

interface ITodoHeader {
  id: string,
  title: string
}

export default function TodoHeader({ id, title } : ITodoHeader) {
  const { deleteTodo, addTaskList } = useTodo();

  const [element, seElement] = useState<undefined | null | HTMLElement>(null);
  const isOpen = Boolean(element);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    seElement(e.currentTarget);
  };

  const handleClose = () => {
    seElement(null);
  };

  const createDate = () => {
    const date = new Date();
    return date.toLocaleString('en-GB', { day: 'numeric', month: '2-digit' });
  };

  return (
    <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography fontSize={{
        sm: '1.5rem',
        xs: '1rem',
      }}
      >
        {title}
      </Typography>
      <ButtonBase onClick={handleClick}>
        <SettingsIcon />
      </ButtonBase>
      <Menu
        open={isOpen}
        onClose={handleClose}
        anchorEl={element}
        MenuListProps={{
          sx: {
            minWidth: '200px',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: -200,
        }}
      >
        <MenuItem onClick={() => addTaskList(id, createDate())}>Add taskList</MenuItem>
        <MenuItem>show news</MenuItem>
        <MenuItem onClick={() => deleteTodo(id)}>Remove todol</MenuItem>
      </Menu>
    </CardContent>
  );
}
