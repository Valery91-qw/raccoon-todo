import {
  ButtonBase, List, ListItemText, Switch,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useTask } from '../../../../context/AppDataContext';

interface ITask {
  todoId: string
  taskListId: string
  id: string
  title: string
  isDone: boolean
}

export default function Task({
  todoId, taskListId, id, title, isDone,
}: ITask) {
  const { deleteTask, changeTaskStatus } = useTask(todoId, taskListId);

  return (
    <List sx={{ display: 'flex' }}>
      <ButtonBase onClick={() => deleteTask(todoId, taskListId, id)}>
        <Delete />
      </ButtonBase>
      <ListItemText>
        {!isDone ? title : <del>{title}</del>}
      </ListItemText>
      <Switch checked={isDone} onChange={() => changeTaskStatus(todoId, taskListId, id)} />
    </List>
  );
}
