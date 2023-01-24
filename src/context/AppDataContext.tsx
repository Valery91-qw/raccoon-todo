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

  const addTask = useCallback((todoId: string, taskListId: string, title: string) => {
    dispatch({ type: Actions.ADD_TASK, payload: { todoId, taskListId, title } });
  }, []);

  const deleteTask = useCallback((todoId: string, taskListId: string, taskId: string) => {
    dispatch({ type: Actions.DELETE_TASK, payload: { todoId, taskListId, taskId } });
  }, []);

  const changeTaskStatus = useCallback((todoId: string, taskListId: string, taskId: string) => {
    dispatch({ type: Actions.CHANGE_TASK_STATUS, payload: { todoId, taskListId, taskId } });
  }, []);

  return {
    state, addTodo, deleteTodo, addTaskList, deleteTaskList, addTask, deleteTask, changeTaskStatus,
  };
};

const initialStateContext = {
  state: initState,
  addTodo: (title: string) => { },
  deleteTodo: (id: string) => { },
  addTaskList: (todoId: string, title: string) => { },
  deleteTaskList: (todoId: string, taskListId: string) => { },
  addTask: (todoId: string, taskListId: string, title: string) => { },
  deleteTask: (todoId: string, taskListId: string, taskId: string) => { },
  changeTaskStatus: (todoId: string, taskListId: string, taskId: string) => { },
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

export const useTaskList = (id: string) => {
  const { state: { todos }, deleteTaskList, addTask } = useContext(AppDataContext);
  const { tasksList } = todos.find((el) => el.id === id);
  return { tasksList, deleteTaskList, addTask };
};

export const useTask = (todoId: string, taskListId: string) => {
  const { state: { todos }, deleteTask, changeTaskStatus } = useContext(AppDataContext);
  const { tasksList } = todos.find((el) => el.id === todoId);
  const { tasks } = tasksList.find((el) => el.id === taskListId);
  return { tasks, deleteTask, changeTaskStatus };
};
export function AppDataProvider({ children }: typeof children) {
  return (
    <AppDataContext.Provider value={useAppDataContext(initState)}>
      {children}
    </AppDataContext.Provider>
  );
}
