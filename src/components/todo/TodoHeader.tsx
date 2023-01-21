import {
  ButtonBase, CardContent, Menu, MenuItem, Typography,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import { useTodo } from '../../context/AppDataContext';

export default function TodoHeader({ id, name } : { id: string, name: string }) {
  const { deleteTodo, addTaskList } = useTodo();

  const [element, seElement] = useState<undefined | null | HTMLElement>(null);
  const isOpen = Boolean(element);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    seElement(e.currentTarget);
  };

  const handleClose = () => {
    seElement(null);
  };

  return (
    <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography fontSize="1.5rem">
        {name}
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
        <MenuItem onClick={() => addTaskList(id, 'hello')}>Add taskList</MenuItem>
        <MenuItem>show news</MenuItem>
        <MenuItem onClick={() => deleteTodo(id)}>Remove todol</MenuItem>
      </Menu>
    </CardContent>
  );
}
