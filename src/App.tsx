import { Grid } from '@mui/material';
import Header from './components/Header';
import Todo from './components/todo/Todo';
import { useAppDataContext } from './context/AppDataContext';

function App() {
  const { todos } = useAppDataContext();

  return (
    <>
      <Header />
      <Grid container spacing={4} px={10} mt={1}>
        {
            todos.map((el) => <Todo key={el.todoName} name={el.todoName} tasks={el.tasks} />)
          }
      </Grid>
    </>
  );
}

export default App;
