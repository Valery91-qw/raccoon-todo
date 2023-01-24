type TaskType = {
  id: string,
  title: string
  isDone: boolean
};

type TaskListType = {
  id: string
  title: string

  tasks: Array<TaskType>
};

type TodoType = {
  id: string,
  todoTitle: string,
  tasksList: Array<TaskListType>
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
