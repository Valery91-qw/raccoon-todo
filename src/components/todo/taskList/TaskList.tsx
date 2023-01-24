import {
  Collapse,
  List,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import TaskListHeader from './TaskListHeader';
import Task from './task/Task';

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
  const [open, setOpen] = useState(false);

  return (
    <List
      subheader={(
        <TaskListHeader todoId={todoId} id={id} title={title} setOpen={setOpen} />
      )}
    >
      <Collapse in={open} unmountOnExit>
        {
            taskList.map((el) => (
              <Task key={el.task} task={el.task} />
            ))
        }
      </Collapse>
    </List>
  );
}
