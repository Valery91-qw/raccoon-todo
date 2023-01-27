import {
  forwardRef, ReactElement, useState,
} from 'react';
import {
  Box, IconButton, TextField,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { useTaskList } from '../../../../context/appDataContext/AppDataContext';
import inputTaskParamsStyles from './InputTaskParams.styles';
import { ChangeEventHandlerType, InputTaskParamsTypes } from './InputTaskParams.types';

const InputTaskParams = forwardRef<ReactElement, InputTaskParamsTypes>(
  ({ todoId, taskListId }, ref) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const { addTask } = useTaskList(todoId);

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
          placeholder="Task title"
          value={taskTitle}
          onChange={changeTitleHandler}
        />
        <TextField
          required={!taskDescription}
          multiline
          placeholder="Task description"
          rows={inputTaskParamsStyles.multilineTextField.rows}
          value={taskDescription}
          onChange={changeDescriptionHandler}
        />
        <IconButton onClick={clickHandler} sx={inputTaskParamsStyles.iconButton}>
          <Add />
        </IconButton>
      </Box>
    );
  },
);

export default InputTaskParams;
