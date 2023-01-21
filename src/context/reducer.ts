import { v4 as uuid } from 'uuid';

type TaskList = {
  id: string
  title: string

  tasks: []
};

type TodoType = {
  id: string,
  todoTitle: string,
  tasksList: Array<TaskList>
};

export type StateType = {
  todos: Array<TodoType>
};
export const initState: StateType = {
  todos: [],
};

export type ActionsType = {
  type: string
  payload?: any
};

export const appReducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: uuid(), todoTitle: action.payload, tasksList: [] }],
      };
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter((el) => el.id !== action.payload) };
    case 'ADD_TASKS_LIST':
      return {
        ...state,
        todos: state.todos.map(
          (el) => (el.id === action.payload.todoId
            ? {
              ...el,
              tasksList: [...el.tasksList, { id: uuid(), title: action.payload.title, tasks: [] }],
            }
            : { ...el }),
        ),
      };
    default:
      throw new Error('action not found');
  }
};
