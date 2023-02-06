import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { StateType } from './store.type';
import { createTask, createTaskList, createTodo } from './store.utils';

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
      const curTodo = state.todos.find((todo) => todo.id === todoId);
      curTodo.tasksList.unshift(createTaskList(date));
    },
  ),
  deleteTaskList: (todoId: string, taskListId: string) => set(
    (state) => {
      const curTodo = state.todos.find((todo) => todo.id === todoId);
      const curTaskListId = curTodo.tasksList.findIndex((taskList) => taskList.id === taskListId);
      curTodo.tasksList.splice(curTaskListId, 1);
    },
  ),
  addTask: (todoId: string, taskListId: string, title: string, description: string) => set(
    (state) => {
      const curTodo = state.todos.find((todo) => todo.id === todoId);
      const curTaskList = curTodo.tasksList.find((taskList) => taskList.id === taskListId);
      curTaskList.tasks.unshift(createTask(title, description));
    },
  ),
  deleteTask: (todoId: string, taskListId: string, taskId: string) => set(
    (state) => {
      const curTodo = state.todos.find((todo) => todo.id === todoId);
      const curTaskList = curTodo.tasksList.find((taskList) => taskList.id === taskListId);
      const curTaskId = curTaskList.tasks.findIndex((task) => task.id === taskId);
      curTaskList.tasks.splice(curTaskId, 1);
    },
  ),
  changeTaskStatus: (todoId: string, taskListId: string, taskId: string) => set(
    (state) => {
      const curTodo = state.todos.find((todo) => todo.id === todoId);
      const curTaskList = curTodo.tasksList.find((taskList) => taskList.id === taskListId);
      const curTask = curTaskList.tasks.find((task) => task.id === taskId);
      curTask.isDone = !curTask.isDone;
    },
  ),
})));

export default useRootState;
