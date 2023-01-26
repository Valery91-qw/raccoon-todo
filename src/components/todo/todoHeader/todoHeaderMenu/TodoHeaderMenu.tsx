import {
  FormControlLabel,
  ListItemButton,
  ListItemIcon, ListItemText, Menu, MenuItem, Switch,
} from '@mui/material';
import React from 'react';
import { Add, Delete } from '@mui/icons-material';
import { useTodo } from '../../../../context/appDataContext/AppDataContext';
import { useFetch } from '../../../../context/AppQueryContextProvider';
import todoHeaderMenuStyles from './todoHeaderMenu.styles';
import TodoHeaderMenuType from './todoHeaderMenu.types';

export default function TodoHeaderMenu({ todoId, handleClose, element }: TodoHeaderMenuType) {
  const { deleteTodo, addTaskList } = useTodo();
  const { handleClick, news } = useFetch();

  const checked = Boolean(news);

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
      MenuListProps={todoHeaderMenuStyles.menuListProps}
      anchorOrigin={todoHeaderMenuStyles.anchorOrigin}
    >
      <MenuItem onClick={() => addTaskList(todoId, createDate())}>
        <ListItemIcon>
          <Add />
        </ListItemIcon>
        <ListItemText primary="Add todo list" />
      </MenuItem>
      <MenuItem onClick={() => deleteTodo(todoId)}>
        <ListItemIcon>
          <Delete />
        </ListItemIcon>
        <ListItemText primary="Delete todo" />
      </MenuItem>
      <MenuItem onChange={(e) => handleClick(e)}>
        <FormControlLabel
          control={<Switch checked={checked} />}
          labelPlacement="start"
          label="Show news"
        />
      </MenuItem>
    </Menu>
  );
}
