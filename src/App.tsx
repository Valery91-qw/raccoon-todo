import { Grid } from '@mui/material';
import Header from './components/Header';
import Todo from './components/todo/Todo';
import { useTodo } from './context/AppDataContext';

function App() {
  const { todos } = useTodo();

  return (
    <>
      <Header />
      <Grid container spacing={4} px={10} mt={1}>
        {
            todos.map(
              (el) => <Todo key={el.id} id={el.id} title={el.todoTitle} />,
            )
          }
      </Grid>
    </>
  );
}

export default App;
