export const enum Actions {
  ADD_TODO,
  DELETE_TODO,
  ADD_TASK_LIST,
  DELETE_TASK_LIST,
  ADD_TASK,
  DELETE_TASK,
  CHANGE_TASK_STATUS,
}

type AddTodo = {
  type: Actions.ADD_TODO
  payload: string
};

type DeleteTodo = {
  type: Actions.DELETE_TODO
  payload: string
};

type AddTaskList = {
  type: Actions.ADD_TASK_LIST
  payload: {
    todoId: string,
    date: Date
  }
};

type DeleteTaskList = {
  type: Actions.DELETE_TASK_LIST
  payload: {
    todoId: string,
    taskListId: string,
  }
};

type AddTask = {
  type: Actions.ADD_TASK
  payload: {
    todoId: string,
    taskListId: string,
    title: string
    description: string
  }
};

type DeleteTask = {
  type: Actions.DELETE_TASK
  payload: {
    todoId: string
    taskListId: string
    taskId: string
  }
};

type ChangeTaskStatus = {
  type: Actions.CHANGE_TASK_STATUS
  payload: {
    todoId: string
    taskListId: string
    taskId: string
  }
};

export type ActionsType =
    AddTodo |
    DeleteTodo |
    AddTaskList |
    DeleteTaskList |
    AddTask |
    DeleteTask |
    ChangeTaskStatus;
