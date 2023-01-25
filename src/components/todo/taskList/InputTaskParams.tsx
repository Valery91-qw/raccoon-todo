import React, { ChangeEvent, useState } from 'react';
import {
  Box, ButtonBase, TextField,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { useTaskList } from '../../../context/AppDataContext';

type InputTaskParamsTypes = {
  todoId: string
  taskListId: string

};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function InputTaskParams({ todoId, taskListId } : InputTaskParamsTypes) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const { addTask } = useTaskList(todoId);

  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
  };

  const changeDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.currentTarget.value);
  };
  const clickHandler = () => {
    if (!taskTitle || !taskDescription) return;
    addTask(todoId, taskListId, taskTitle.trim(), taskDescription.trim());
    setTaskTitle('');
    setTaskDescription('');
  };

  return (
    <Box sx={style}>
      <TextField
        placeholder="Task title"
        required
        value={taskTitle}
        onChange={changeTitleHandler}
      />
      <TextField
        multiline
        placeholder="Task description"
        rows={4}
        value={taskDescription}
        onChange={changeDescriptionHandler}
      />
      <ButtonBase onClick={clickHandler} sx={{ display: 'block' }}>
        <Add />
      </ButtonBase>
    </Box>
  );
}
