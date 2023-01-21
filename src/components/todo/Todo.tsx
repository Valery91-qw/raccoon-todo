import {
  Card, Grid,
} from '@mui/material';
import TodoHeader from './TodoHeader';
import { useTasks } from '../../context/AppDataContext';
import TaskList from './taskList/TaskList';

type TodoType = {
  id: string
  title: string
};

export default function Todo({ id, title }: TodoType) {
  const { tasksList } = useTasks(id);

  return (
    <Grid item md={4} sm={6} xs={12} textAlign="center">
      <Card>
        <TodoHeader id={id} name={title} />
        {
              tasksList.map(
                (el) => <TaskList key={el.id} title={el.title} todoId={id} id={el.id} />,
              )
          }
      </Card>
    </Grid>
  );
}
