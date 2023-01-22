import { v4 as uuid } from 'uuid';
import { Actions, ActionsType, StateType } from './reducer.types';

export const initState: StateType = {
  todos: [],
};

export const appReducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: uuid(), todoTitle: action.payload, tasksList: [] }],
      };
    case Actions.DELETE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case Actions.ADD_TASK_LIST:
      return {
        ...state,
        todos: state.todos.map(
          (todo) => (todo.id === action.payload.todoId
            ? {
              ...todo,
              tasksList: [
                { id: uuid(), title: action.payload.title, tasks: [] },
                ...todo.tasksList,
              ],
            }
            : { ...todo }),
        ),
      };
    case Actions.DELETE_TASK_LIST:
      return {
        ...state,
        todos: state.todos.map(
          (todo) => (
            todo.id === action.payload.todoId
              ? {
                ...todo,
                tasksList: todo.tasksList.filter(
                  (taskList) => taskList.id !== action.payload.taskListId,
                ),
              } : {
                ...todo,
              }
          ),
        ),
      };
    default:
      throw new Error(`action with such type '${action.type}' not handle`);
  }
};
