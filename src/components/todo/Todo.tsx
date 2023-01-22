import {
  Card, Grid,
} from '@mui/material';
import TodoHeader from './TodoHeader';
import { useTasks } from '../../context/AppDataContext';
import TaskList from './taskList/TaskList';

interface ITodo {
  id: string
  title: string
}

export default function Todo({ id, title }: ITodo) {
  const { tasksList } = useTasks(id);

  return (
    <Grid item md={4} sm={6} xs={12} textAlign="center">
      <Card>
        <TodoHeader id={id} title={title} />
        {
              tasksList.map(
                (taskList) => (
                  <TaskList
                    key={taskList.id}
                    id={taskList.id}
                    todoId={id}
                    title={taskList.title}
                  />
                ),
              )
          }
      </Card>
    </Grid>
  );
}
