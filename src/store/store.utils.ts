import { v4 as uuid } from 'uuid';
import { TaskListType, TaskType, TodoType } from './store.type';

function serializeDate(date: Date) {
  const createDate = date.toLocaleString('en-GB', {
    day: 'numeric',
    month: '2-digit',
  });
  return `Tasklist ( ${createDate} )`;
}

export function createTodo(title: string): TodoType {
  return { id: uuid(), todoTitle: title, tasksList: [] };
}

export function createTaskList(date: Date): TaskListType {
  const title = serializeDate(date);
  return { id: uuid(), title, tasks: [] };
}

export function createTask(title: string, description: string): TaskType {
  return {
    id: uuid(), title, description, isDone: false,
  };
}

export function findTodo<T>(todoId: string, state: T): TodoType {
  return state.todos.find((todo) => todo.id === todoId);
}

export function findTaskList<T>(todoId: string, taskListId: string, state: T): TaskListType {
  const todo = findTodo<T>(todoId, state);
  return todo.tasksList.find((taskList) => taskList.id === taskListId);
}

export function findTask<T>(
  todoId: string,
  taskListId: string,
  taskId: string,
  state: T,
): TaskType {
  const taskList = findTaskList<T>(todoId, taskListId, state);
  return taskList.tasks.find((task) => task.id === taskId);
}
