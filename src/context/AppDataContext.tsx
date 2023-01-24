import {
  createContext, useCallback, useContext, useReducer,
} from 'react';
import { Actions, ActionsType, StateType } from './reducer/reducer.types';
import { appReducer, initState } from './reducer/reducer';

const useAppDataContext = (init: StateType) => {
  const [state, dispatch] = useReducer<(state: StateType, actions: ActionsType)
  => StateType, StateType>(appReducer, init);

  const addTodo = useCallback((title: string) => {
    dispatch({ type: Actions.ADD_TODO, payload: title });
  }, []);

  const deleteTodo = useCallback((id: string) => {
    dispatch({ type: Actions.DELETE_TODO, payload: id });
  }, []);

  const addTaskList = useCallback((todoId: string, title: string) => {
    dispatch({ type: Actions.ADD_TASK_LIST, payload: { todoId, title } });
  }, []);

  const deleteTaskList = useCallback((todoId: string, taskListId: string) => {
    dispatch({ type: Actions.DELETE_TASK_LIST, payload: { todoId, taskListId } });
  }, []);

  return {
    state, addTodo, deleteTodo, addTaskList, deleteTaskList,
  };
};

const initialStateContext = {
  state: initState,
  addTodo: (title: string) => { },
  deleteTodo: (id: string) => { },
  addTaskList: (todoId: string, title: string) => { },
  deleteTaskList: (todoId: string, taskListId: string) => { },
};

const AppDataContext = createContext<typeof initialStateContext>(initialStateContext);

export const useTodo = () => {
  const {
    state: { todos }, addTodo, deleteTodo, addTaskList,
  } = useContext(AppDataContext);
  return {
    todos, addTodo, deleteTodo, addTaskList,
  };
};

export const useTasks = (id: string) => {
  const { state: { todos }, deleteTaskList } = useContext(AppDataContext);
  const { tasksList } = todos.find((el) => el.id === id);
  return { tasksList, deleteTaskList };
};
export function AppDataProvider({ children }: typeof children) {
  return (
    <AppDataContext.Provider value={useAppDataContext(initState)}>
      {children}
    </AppDataContext.Provider>
  );
}
