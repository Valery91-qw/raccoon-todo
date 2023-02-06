import {
  Box,
  Collapse, IconButton,
  List, Modal,
} from '@mui/material';
import { memo, useState } from 'react';
import { Add } from '@mui/icons-material';
import TaskListHeader from './taskListHeader/TaskListHeader';
import Task from './task/Task';
import InputTaskParams from './inputTaskParams/InputTaskParams';
import TaskListType from './TaskList.types';
import taskListStyles from './TaskList.styles';
import useRootState from '../../../store/store';

const TaskList = memo((
  { todoId, taskListId, title } : TaskListType,
) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const tasks = useRootState((state) => {
    const curTodo = state.todos.find((todo) => todo.id === todoId);
    const curTaskList = curTodo.tasksList.find((taskList) => taskList.id === taskListId);
    return curTaskList.tasks;
  });

  return (
    <>
      <List
        subheader={(
          <TaskListHeader todoId={todoId} id={taskListId} title={title} setOpen={setOpen} />
      )}
      >
        <Collapse in={open} unmountOnExit>
          <Box sx={taskListStyles.box.sx}>
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
      <Modal
        disableAutoFocus
        open={openModal}
        onClose={() => setOpenModal((prevState) => !prevState)}
      >
        <InputTaskParams todoId={todoId} taskListId={taskListId} />
      </Modal>
    </>
  );
});

export default TaskList;
