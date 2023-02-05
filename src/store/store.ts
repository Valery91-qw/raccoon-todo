import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { immer } from 'zustand/middleware/immer';
import { StateType } from './store.type';
import serializeDate from './store.utils';

const useRootState = create<StateType>(immer((set) => ({
  todos: [],
  addTodo: (title: string) => set(
    (state) => {
      state.todos.push({ id: uuid(), todoTitle: title, tasksList: [] });
    },
  ),
  deleteTodo: (id: string) => set(
    (state) => {
      const todoId = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(todoId, 1);
    },
  ),
  addTaskList: (todoId: string, data: Date) => set(
    (state) => {
      const title = serializeDate(data);
      const curTodo = state.todos.find((todo) => todo.id === todoId);
      curTodo.tasksList.unshift({ id: uuid(), title, tasks: [] });
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
      curTaskList.tasks.unshift({
        id: uuid(), title, description, isDone: false,
      });
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
