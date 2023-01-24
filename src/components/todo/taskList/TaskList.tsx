import {
  Box, ButtonBase,
  Collapse,
  List, TextField,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
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
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = useTaskList(todoId);
  const { tasks } = useTask(todoId, id);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
  };

  const clickHandler = () => {
    if (!taskTitle) return;
    addTask(todoId, id, taskTitle.trim());
    setTaskTitle('');
  };

  return (
    <List
      subheader={(
        <TaskListHeader todoId={todoId} id={id} title={title} setOpen={setOpen} />
      )}
    >
      <Collapse in={open} unmountOnExit>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            placeholder="Task title"
            required
            value={taskTitle}
            onChange={changeHandler}
          />
          <ButtonBase onClick={clickHandler}>
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
