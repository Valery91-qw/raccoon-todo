import {
  ButtonBase, List, ListItemText, Switch, Tooltip, Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useTask } from '../../../../context/appDataContext/AppDataContext';
import TaskType from './Task.types';
import taskStyles from './Task.styles';

export default function Task({
  todoId, taskListId, taskId, title, description, isDone,
}: TaskType) {
  const { deleteTask, changeTaskStatus } = useTask(todoId, taskListId);

  return (
    <List sx={taskStyles.list.sx}>
      <ButtonBase onClick={() => deleteTask(todoId, taskListId, taskId)}>
        <Delete />
      </ButtonBase>
      <ListItemText sx={taskStyles.listItemText.sx}>
        <Tooltip title={title}>
          <Typography variant="h6" noWrap>
            {!isDone ? title : <del>{title}</del>}
          </Typography>
        </Tooltip>
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
