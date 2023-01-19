import { useState } from 'react';
import { Grid } from '@mui/material';
import Header from './components/Header';
import { AppContextProvider } from './context/AppContext';
import Todo from './components/todo/Todo';

function App() {
  const [todos] = useState([
    { todoName: 'one todo', tasks: [] },
    { todoName: 'two todo', tasks: [] },
    { todoName: 'two todo', tasks: [] },
    { todoName: 'two todo', tasks: [] },
  ]);

  return (
    <AppContextProvider>
      <Header />
      <Grid container spacing={4} px={10} mt={1}>
        {
            todos.map((el) => <Todo key={el.todoName} name={el.todoName} tasks={el.tasks} />)
        }
      </Grid>
    </AppContextProvider>
  );
}

export default App;
