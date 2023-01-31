import {
  FormControlLabel,
  ListItemIcon, ListItemText, Menu, MenuItem, Switch,
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useTaskList, useTodo } from '../../../../context/appDataContext/AppDataContext';
import { useFetch } from '../../../../context/appQueryContext/AppQueryContextProvider';
import todoHeaderMenuStyles from './TodoHeaderMenu.styles';
import TodoHeaderMenuType from './TodoHeaderMenu.types';

export default function TodoHeaderMenu({ todoId, handleClose, element }: TodoHeaderMenuType) {
  const { deleteTodo } = useTodo();
  const { addTaskList } = useTaskList(todoId);

  const {
    showNews, response, isLoading, isRefetching,
  } = useFetch();

  const checked = Boolean(response);

  const isOpen = Boolean(element);

  return (
    <Menu
      open={isOpen}
      onClose={handleClose}
      anchorEl={element}
      MenuListProps={todoHeaderMenuStyles.menuListProps}
      anchorOrigin={todoHeaderMenuStyles.anchorOrigin}
    >
      <MenuItem onClick={() => addTaskList(todoId, new Date())}>
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
      <MenuItem onChange={(e) => showNews(e.target.checked)}>
        <FormControlLabel
          control={<Switch disabled={isLoading || isRefetching} checked={checked} />}
          labelPlacement="start"
          label="Show news"
        />
      </MenuItem>
    </Menu>
  );
}
