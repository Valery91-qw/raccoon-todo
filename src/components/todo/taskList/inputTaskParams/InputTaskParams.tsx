import {
  forwardRef, ReactElement, useState,
} from 'react';
import {
  Box, IconButton, TextField,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import inputTaskParamsStyles from './InputTaskParams.styles';
import { ChangeEventHandlerType, InputTaskParamsTypes } from './InputTaskParams.types';
import useRootState from '../../../../store/store';

function InputTaskParams({ todoId, taskListId }: InputTaskParamsTypes, ref) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const addTask = useRootState((state) => state.addTask);

  const changeTitleHandler = (e: ChangeEventHandlerType) => {
    setTaskTitle(e.currentTarget.value);
  };

  const changeDescriptionHandler = (e: ChangeEventHandlerType) => {
    setTaskDescription(e.currentTarget.value);
  };
  const clickHandler = () => {
    if (!taskTitle || !taskDescription) return;
    addTask(todoId, taskListId, taskTitle.trim(), taskDescription.trim());
    setTaskTitle('');
    setTaskDescription('');
  };

  return (
    <Box
      sx={inputTaskParamsStyles.box.style}
      ref={ref}
      tabIndex={inputTaskParamsStyles.box.tabIndex}
    >
      <TextField
        required={!taskTitle}
        label="Task title"
        value={taskTitle}
        onChange={changeTitleHandler}
      />
      <TextField
        required={!taskDescription}
        multiline
        label="Task description"
        rows={inputTaskParamsStyles.multilineTextField.rows}
        value={taskDescription}
        onChange={changeDescriptionHandler}
      />
      <IconButton
        disabled={!taskTitle || !taskDescription}
        onClick={clickHandler}
        sx={inputTaskParamsStyles.iconButton}
      >
        <Add fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default forwardRef<ReactElement, InputTaskParamsTypes>(InputTaskParams);
