import {
  ButtonBase, List, ListItemText, Switch, Tooltip, Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { memo } from 'react';
import TaskType from './Task.types';
import taskStyles from './Task.styles';
import useRootState from '../../../../store/store';

const Task = memo(({
  todoId, taskListId, taskId, title, description, isDone,
}: TaskType) => {
  const deleteTask = useRootState((state) => state.deleteTask);
  const changeTaskStatus = useRootState((state) => state.changeTaskStatus);

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
});

export default Task;
