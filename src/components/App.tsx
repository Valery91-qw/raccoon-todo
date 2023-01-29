import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import Header from './header/Header';
import Todo from './todo/Todo';
import { useTodo } from '../context/appDataContext/AppDataContext';
import gridStyles from './App.styles';
import NewsHeadline from './newsLine/NewsHeadline';
import { useFetch } from '../context/appQueryContext/AppQueryContextProvider';

function App() {
  const { todos } = useTodo();
  const { response, showNews } = useFetch();

  useEffect(() => {
    if (!todos.length && response) {
      showNews(false);
    }
  }, [response, showNews, todos.length]);

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
            todos.length
              ? todos.map(
                (el) => <Todo key={el.id} todoId={el.id} title={el.todoTitle} />,
              ) : <Typography> Add your first todo </Typography>
          }
      </Grid>
      <NewsHeadline />
    </>
  );
}

export default App;
