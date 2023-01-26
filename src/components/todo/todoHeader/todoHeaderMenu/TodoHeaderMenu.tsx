import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useTodo } from '../../../../context/appDataContext/AppDataContext';

type TodoHeaderMenuType = {
  todoId: string
  handleClose: () => void
  element: HTMLElement | null | undefined
};
export default function TodoHeaderMenu({ todoId, handleClose, element }: TodoHeaderMenuType) {
  const { deleteTodo, addTaskList } = useTodo();

  const isOpen = Boolean(element);

  const createDate = () => {
    const date = new Date();
    return date.toLocaleString('en-GB', { day: 'numeric', month: '2-digit' });
  };

  return (
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
      <MenuItem onClick={() => addTaskList(todoId, createDate())}>Add taskList</MenuItem>
      <MenuItem>show news</MenuItem>
      <MenuItem onClick={() => deleteTodo(todoId)}>Remove todol</MenuItem>
    </Menu>
  );
}
