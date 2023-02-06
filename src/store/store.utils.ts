import { v4 as uuid } from 'uuid';

function serializeDate(date: Date) {
  const createDate = date.toLocaleString('en-GB', {
    day: 'numeric',
    month: '2-digit',
  });
  return `Tasklist ( ${createDate} )`;
}

export function createTodo(title: string) {
  return { id: uuid(), todoTitle: title, tasksList: [] };
}

export function createTaskList(date: Date) {
  const title = serializeDate(date);
  return { id: uuid(), title, tasks: [] };
}

export function createTask(title: string, description: string) {
  return {
    id: uuid(), title, description, isDone: false,
  };
}
