import {
  Card, Grid,
} from '@mui/material';
import { memo } from 'react';
import TodoHeader from './todoHeader/TodoHeader';
import TaskList from './taskList/TaskList';
import gridStyles from './Todo.styles';
import TodoType from './Todo.types';
import useRootState from '../../store/store';

function Todo({ todoId, title }: TodoType) {
  const tasksList = useRootState((state) => {
    const curTodo = state.todos.find((todo) => todo.id === todoId);
    return curTodo.tasksList;
  });

  return (
    <Grid
      item={gridStyles.item}
      sm={gridStyles.sm}
      md={gridStyles.md}
      xs={gridStyles.xs}
      textAlign={gridStyles.textAlign}
    >
      <Card>
        <TodoHeader todoId={todoId} title={title} />
        {
            tasksList.map(
              (taskList) => (
                <TaskList
                  key={taskList.id}
                  taskListId={taskList.id}
                  todoId={todoId}
                  title={taskList.title}
                />
              ),
            )
          }
      </Card>
    </Grid>
  );
}

export default memo(Todo);
