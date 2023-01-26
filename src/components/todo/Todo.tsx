import {
  Card, Grid,
} from '@mui/material';
import TodoHeader from './todoHeader/TodoHeader';
import { useTaskList } from '../../context/appDataContext/AppDataContext';
import TaskList from './taskList/TaskList';
import gridStyles from './Todo.styles';

interface ITodo {
  todoId: string
  title: string
}

export default function Todo({ todoId, title }: ITodo) {
  const { tasksList } = useTaskList(todoId);

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
