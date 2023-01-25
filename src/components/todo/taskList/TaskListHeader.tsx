import {
  ButtonBase, Checkbox, ListItemText, Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Dispatch, SetStateAction } from 'react';
import { useTaskList } from '../../../context/appDataContext/AppDataContext';

interface ITaskListHeader {
  id: string,
  todoId: string
  title: string,
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function TaskListHeader({
  todoId, id, title, setOpen,
}: ITaskListHeader) {
  const { deleteTaskList } = useTaskList(todoId);

  return (
    <ListItemText disableTypography sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Checkbox onChange={() => setOpen((prevState) => !prevState)} />
      <Typography>
        {title}
      </Typography>
      <ButtonBase onClick={() => deleteTaskList(todoId, id)}>
        <Delete />
      </ButtonBase>
    </ListItemText>
  );
}
