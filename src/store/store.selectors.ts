import { StateType } from './store.type';
import { findTaskList, findTodo } from './store.utils';

export const selectTodos = (state: StateType) => state.todos;

export const selectTaskLists = (todoId: string, state: StateType) => {
  const todo = findTodo<StateType>(todoId, state);
  return todo.tasksList;
};

export const selectTasks = (todoId: string, taskListId: string, state: StateType) => {
  const taskList = findTaskList<StateType>(todoId, taskListId, state);
  return taskList.tasks;
};
