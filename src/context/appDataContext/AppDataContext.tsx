import {
  createContext, useCallback, useContext, useReducer,
} from 'react';
import { StateType } from './reducer/reducer.types';
import { appReducer, initState } from './reducer/reducer';
import { Actions, ActionsType } from './reducer/action.types';
import { InitialContextType } from './AppDataContext.types';

const useAppDataContext = (init: StateType) => {
  const [state, dispatch] = useReducer<(state: StateType, actions: ActionsType)
  => StateType, StateType>(appReducer, init);

  const addTodo = useCallback((title: string) => {
    dispatch({ type: Actions.ADD_TODO, payload: title });
  }, []);

  const deleteTodo = useCallback((id: string) => {
    dispatch({ type: Actions.DELETE_TODO, payload: id });
  }, []);

  const addTaskList = useCallback((todoId: string, date: Date) => {
    dispatch({ type: Actions.ADD_TASK_LIST, payload: { todoId, date } });
  }, []);

  const deleteTaskList = useCallback((todoId: string, taskListId: string) => {
    dispatch({ type: Actions.DELETE_TASK_LIST, payload: { todoId, taskListId } });
  }, []);

  const addTask = useCallback((
    todoId: string,
    taskListId: string,
    title: string,
    description: string,
  ) => {
    dispatch({
      type: Actions.ADD_TASK,
      payload: {
        todoId, taskListId, title, description,
      },
    });
  }, []);

  const deleteTask = useCallback((todoId: string, taskListId: string, taskId: string) => {
    dispatch({ type: Actions.DELETE_TASK, payload: { todoId, taskListId, taskId } });
  }, []);

  const changeTaskStatus = useCallback((todoId: string, taskListId: string, taskId: string) => {
    dispatch({ type: Actions.CHANGE_TASK_STATUS, payload: { todoId, taskListId, taskId } });
  }, []);

  return {
    state,
    addTodo,
    deleteTodo,
    addTaskList,
    deleteTaskList,
    addTask,
    deleteTask,
    changeTaskStatus,
  };
};

const AppDataContext = createContext<InitialContextType>(
  {} as InitialContextType,
);

export const useTodo = () => {
  const {
    state: { todos }, addTodo, deleteTodo,
  } = useContext(AppDataContext);
  return {
    todos, addTodo, deleteTodo,
  };
};

export const useTaskList = (todoId: string) => {
  const { state: { todos }, deleteTaskList, addTaskList } = useContext(AppDataContext);
  const { tasksList } = todos.find((el) => el.id === todoId);
  return { tasksList, deleteTaskList, addTaskList };
};

export const useTask = (todoId: string, taskListId: string) => {
  const {
    state: { todos },
    deleteTask,
    changeTaskStatus,
    addTask,
  } = useContext(AppDataContext);
  const { tasksList } = todos.find((el) => el.id === todoId);
  const { tasks } = tasksList.find((el) => el.id === taskListId);

  return {
    tasks, deleteTask, changeTaskStatus, addTask,
  };
};
export function AppDataProvider({ children }: typeof children) {
  return (
    <AppDataContext.Provider value={useAppDataContext(initState)}>
      {children}
    </AppDataContext.Provider>
  );
}
