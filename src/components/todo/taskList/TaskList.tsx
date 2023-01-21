import {
  Collapse,
  List, ListItemText, Switch, TextField,
} from '@mui/material';
import { useState } from 'react';

const taskList = [
  { task: 'one' },
  { task: 'two' },
  { task: 'tree' },
];

export default function TaskList({ title } : { title: string }) {
  const [open, setOpen] = useState(false);

  return (
    <List subheader={(
      <ListItemText>
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
