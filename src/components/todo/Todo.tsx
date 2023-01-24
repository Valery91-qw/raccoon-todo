import {
  Card, Grid,
} from '@mui/material';
import TodoHeader from './TodoHeader';
import { useTaskList } from '../../context/AppDataContext';
import TaskList from './taskList/TaskList';
import gridStyles from './Todo.styles';

interface ITodo {
  id: string
  title: string
}

export default function Todo({ id, title }: ITodo) {
  const { tasksList } = useTaskList(id);

  return (
    <Grid
      item={gridStyles.item}
      sm={gridStyles.sm}
      md={gridStyles.md}
      xs={gridStyles.xs}
      textAlign={gridStyles.textAlign}
    >
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
