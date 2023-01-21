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
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case 'ADD_TASKS_LIST':
      return {
        ...state,
        todos: state.todos.map(
          (todo) => (todo.id === action.payload.todoId
            ? {
              ...todo,
              tasksList: [
                ...todo.tasksList, { id: uuid(), title: action.payload.title, tasks: [] },
              ],
            }
            : { ...todo }),
        ),
      };
    case 'DELETE_TASK_LIST':
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
      throw new Error('action not found');
  }
};
