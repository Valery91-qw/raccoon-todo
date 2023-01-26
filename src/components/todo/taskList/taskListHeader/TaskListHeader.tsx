import {
  Checkbox, IconButton, ListItemText, Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useTaskList } from '../../../../context/appDataContext/AppDataContext';
import TaskListHeaderType from './TaskLiastHeader.types';
import taskListHeaderStyles from './TaskListHeader.styles';

export default function TaskListHeader({
  todoId, id, title, setOpen,
}: TaskListHeaderType) {
  const { deleteTaskList } = useTaskList(todoId);

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
