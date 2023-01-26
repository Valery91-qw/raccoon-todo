import { Grid } from '@mui/material';
import Header from './header/Header';
import Todo from './todo/Todo';
import { useTodo } from '../context/appDataContext/AppDataContext';
import gridStyles from './App.styles';

function App() {
  const { todos } = useTodo();

  return (
    <>
      <Header />
      <Grid
        container={gridStyles.container}
        spacing={gridStyles.spacing}
        px={gridStyles.paddings}
        mt={gridStyles.marginTop}
      >
        {
            todos.map(
              (el) => <Todo key={el.id} todoId={el.id} title={el.todoTitle} />,
            )
          }
      </Grid>
    </>
  );
}

export default App;
