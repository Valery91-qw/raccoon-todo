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

export default function TaskList(
  { title, todoId, id } : { title: string, todoId: string, id: string },
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
