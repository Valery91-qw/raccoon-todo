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

export const enum Actions {
  ADD_TODO,
  DELETE_TODO,
  ADD_TASK_LIST,
  DELETE_TASK_LIST,
}

export type ActionsType = {
  type: Actions
  payload?: any
};
