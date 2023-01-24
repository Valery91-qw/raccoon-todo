import { Actions, ActionsType, StateType } from './reducer.types';
import {
  addTask, addTaskList, addTodo, deleteTask, deleteTaskList, deleteTodo, changeTaskStatus,
} from './reducer.utils';

export const initState: StateType = {
  todos: [],
};

export const appReducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return addTodo(state, action);
    case Actions.DELETE_TODO:
      return deleteTodo(state, action);
    case Actions.ADD_TASK_LIST:
      return addTaskList(state, action);
    case Actions.DELETE_TASK_LIST:
      return deleteTaskList(state, action);
    case Actions.ADD_TASK:
      return addTask(state, action);
    case Actions.DELETE_TASK:
      return deleteTask(state, action);
    case Actions.CHANGE_TASK_STATUS:
      return changeTaskStatus(state, action);
    default:
      throw new Error(`action with such type '${action.type}' not handle`);
  }
};
