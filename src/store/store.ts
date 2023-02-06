import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { StateType } from './store.type';
import {
  createTask, createTaskList, createTodo, findTask, findTaskList, findTodo,
} from './store.utils';

const useRootState = create<StateType>(immer((set) => ({
  todos: [],
  addTodo: (title: string) => set(
    (state) => {
      state.todos.push(createTodo(title));
    },
  ),
  deleteTodo: (id: string) => set(
    (state) => {
      const todoId = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(todoId, 1);
    },
  ),
  addTaskList: (todoId: string, date: Date) => set(
    (state) => {
      const todo = findTodo<StateType>(todoId, state);
      todo.tasksList.unshift(createTaskList(date));
    },
  ),
  deleteTaskList: (todoId: string, taskListId: string) => set(
    (state) => {
      const todo = findTodo<StateType>(todoId, state);
      const curTaskListId = todo.tasksList.findIndex((taskList) => taskList.id === taskListId);
      todo.tasksList.splice(curTaskListId, 1);
    },
  ),
  addTask: (todoId: string, taskListId: string, title: string, description: string) => set(
    (state) => {
      const taskList = findTaskList<StateType>(todoId, taskListId, state);
      taskList.tasks.unshift(createTask(title, description));
    },
  ),
  deleteTask: (todoId: string, taskListId: string, taskId: string) => set(
    (state) => {
      const taskList = findTaskList<StateType>(todoId, taskListId, state);
      const curTaskId = taskList.tasks.findIndex((task) => task.id === taskId);
      taskList.tasks.splice(curTaskId, 1);
    },
  ),
  changeTaskStatus: (todoId: string, taskListId: string, taskId: string) => set(
    (state) => {
      const task = findTask(todoId, taskListId, taskId, state);
      task.isDone = !task.isDone;
    },
  ),
})));

export default useRootState;
