import {
  ButtonBase,
  Collapse,
  List, ListItemText, Switch,
} from '@mui/material';
import { useState } from 'react';
import { Remove } from '@mui/icons-material';
import { useTasks } from '../../../context/AppDataContext';

const taskList = [
  { task: 'one' },
  { task: 'two' },
  { task: 'tree' },
];

interface ITaskList {
  id: string
  todoId: string
  title: string
}

export default function TaskList(
  { id, todoId, title } : ITaskList,
) {
  const { deleteTaskList } = useTasks(todoId);

  const [open, setOpen] = useState(false);

  return (
    <List subheader={(
      <ListItemText>
        <ButtonBase onClick={() => deleteTaskList(todoId, id)}>
          <Remove />
        </ButtonBase>
        {title}
        <Switch onClick={() => setOpen((prevState) => !prevState)} />
      </ListItemText>
      )}
    >
      <Collapse in={open}>
        {
            taskList.map((el) => (
              <List key={el.task}>
                <ListItemText>
                  {el.task}
                </ListItemText>
              </List>
            ))
        }
      </Collapse>
    </List>
  );
}
