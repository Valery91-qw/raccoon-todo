import {
  ButtonBase, List, ListItemText, Switch, Tooltip, Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useTask } from '../../../../context/appDataContext/AppDataContext';

type TaskType = {
  todoId: string
  taskListId: string
  taskId: string
  title: string
  description: string
  isDone: boolean
};

export default function Task({
  todoId, taskListId, taskId, title, description, isDone,
}: TaskType) {
  const { deleteTask, changeTaskStatus } = useTask(todoId, taskListId);

  return (
    <List sx={{ display: 'flex', px: '10px' }}>
      <ButtonBase onClick={() => deleteTask(todoId, taskListId, taskId)}>
        <Delete />
      </ButtonBase>
      <ListItemText sx={{ marginLeft: '15px', textAlign: 'left' }}>
        <Typography variant="h6">
          {!isDone ? title : <del>{title}</del>}
        </Typography>
        <Tooltip title={description}>
          <Typography noWrap>
            {description}
          </Typography>
        </Tooltip>
      </ListItemText>
      <Switch checked={isDone} onChange={() => changeTaskStatus(todoId, taskListId, taskId)} />
    </List>
  );
}
