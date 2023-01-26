import {
  Box,
  Collapse, IconButton,
  List, Modal,
} from '@mui/material';
import { useState } from 'react';
import { Add } from '@mui/icons-material';
import TaskListHeader from './taskListHeader/TaskListHeader';
import Task from './task/Task';
import { useTask } from '../../../context/appDataContext/AppDataContext';
import InputTaskParams from './inputTaskParams/InputTaskParams';

type TaskListType = {
  todoId: string
  taskListId: string
  title: string
};

export default function TaskList(
  { todoId, taskListId, title } : TaskListType,
) {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { tasks } = useTask(todoId, taskListId);

  return (
    <>
      <List
        subheader={(
          <TaskListHeader todoId={todoId} id={taskListId} title={title} setOpen={setOpen} />
      )}
      >
        <Collapse in={open} unmountOnExit>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={() => setOpenModal((prevState) => !prevState)}>
              <Add />
            </IconButton>
          </Box>
          {
          tasks.map((el) => (
            <Task
              key={el.id}
              todoId={todoId}
              taskListId={taskListId}
              taskId={el.id}
              title={el.title}
              description={el.description}
              isDone={el.isDone}
            />
          ))
        }
        </Collapse>
      </List>
      <Modal open={openModal} onClose={() => setOpenModal((prevState) => !prevState)}>
        <InputTaskParams todoId={todoId} taskListId={taskListId} />
      </Modal>
    </>
  );
}
