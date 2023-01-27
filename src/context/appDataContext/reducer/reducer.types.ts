type TaskType = {
  id: string,
  title: string
  description: string
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
