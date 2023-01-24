import {
  Box, ButtonBase,
  Collapse,
  List, TextField,
} from '@mui/material';
import { useState } from 'react';
import { Add } from '@mui/icons-material';
import TaskListHeader from './TaskListHeader';
import Task from './task/Task';
import { useTask, useTaskList } from '../../../context/AppDataContext';

interface ITaskList {
  id: string
  todoId: string
  title: string
}

export default function TaskList(
  { id, todoId, title } : ITaskList,
) {
  const [open, setOpen] = useState(false);
  const { addTask } = useTaskList(todoId);
  const { tasks } = useTask(todoId, id);

  return (
    <List
      subheader={(
        <TaskListHeader todoId={todoId} id={id} title={title} setOpen={setOpen} />
      )}
    >
      <Collapse in={open} unmountOnExit>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField variant="standard" placeholder="Task title" />
          <ButtonBase onClick={() => addTask(todoId, id, 'task hello')}>
            <Add />
          </ButtonBase>
        </Box>
        {
          tasks.map((el) => (
            <Task
              key={el.id}
              todoId={todoId}
              taskListId={id}
              id={el.id}
              title={el.title}
              isDone={el.isDone}
            />
          ))
        }
      </Collapse>
    </List>
  );
}
