import {
  Box, ButtonBase,
  Collapse,
  List, Modal,
} from '@mui/material';
import { useState } from 'react';
import { Add } from '@mui/icons-material';
import TaskListHeader from './TaskListHeader';
import Task from './task/Task';
import { useTask } from '../../../context/appDataContext/AppDataContext';
import InputTaskParams from './InputTaskParams';

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
            <ButtonBase onClick={() => setOpenModal((prevState) => !prevState)}>
              <Add />
            </ButtonBase>
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
