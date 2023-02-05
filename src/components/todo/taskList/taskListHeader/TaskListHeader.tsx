import {
  Checkbox, IconButton, ListItemText, Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import TaskListHeaderType from './TaskLiastHeader.types';
import taskListHeaderStyles from './TaskListHeader.styles';
import useRootState from '../../../../store/store';

export default function TaskListHeader({
  todoId, id, title, setOpen,
}: TaskListHeaderType) {
  const deleteTaskList = useRootState((state) => state.deleteTaskList);

  return (
    <ListItemText disableTypography sx={taskListHeaderStyles.listItemText.sx}>
      <Checkbox onChange={() => setOpen((prevState) => !prevState)} />
      <Typography>
        {title}
      </Typography>
      <IconButton onClick={() => deleteTaskList(todoId, id)}>
        <Delete />
      </IconButton>
    </ListItemText>
  );
}
