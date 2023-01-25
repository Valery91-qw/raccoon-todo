import { v4 as uuid } from 'uuid';
import { StateType } from './reducer.types';

const addTodo = (state: StateType, action): StateType => ({
  ...state,
  todos: [...state.todos, { id: uuid(), todoTitle: action.payload, tasksList: [] }],
});

const deleteTodo = (state: StateType, action): StateType => ({
  ...state, todos: state.todos.filter((todo) => todo.id !== action.payload),
});

const addTaskList = (state: StateType, action): StateType => ({
  ...state,
  todos: state.todos.map(
    (todo) => (todo.id === action.payload.todoId
      ? {
        ...todo,
        tasksList: [
          { id: uuid(), title: action.payload.title, tasks: [] },
          ...todo.tasksList,
        ],
      }
      : { ...todo }),
  ),
});

const deleteTaskList = (state: StateType, action): StateType => ({
  ...state,
  todos: state.todos.map(
    (todo) => (
      todo.id === action.payload.todoId
        ? {
          ...todo,
          tasksList: todo.tasksList.filter(
            (taskList) => taskList.id !== action.payload.taskListId,
          ),
        } : {
          ...todo,
        }
    ),
  ),
});

const addTask = (state: StateType, action): StateType => ({
  ...state,
  todos: state.todos.map(
    (todo) => (todo.id === action.payload.todoId ? {
      ...todo,
      tasksList: todo.tasksList.map((taskList) => (taskList.id === action.payload.taskListId ? {
        ...taskList,
        tasks: [
          {
            id: uuid(),
            title: action.payload.title,
            description: action.payload.description,
            isDone: false,
          },
          ...taskList.tasks,
        ],
      } : {
        ...taskList,
      })),
    } : {
      ...todo,
    }
    ),
  ),
});

const deleteTask = (state: StateType, action): StateType => ({
  ...state,
  todos: state.todos.map((todo) => (todo.id === action.payload.todoId ? {
    ...todo,
    tasksList: todo.tasksList.map((taskList) => (taskList.id === action.payload.taskListId ? {
      ...taskList,
      tasks: taskList.tasks.filter((task) => task.id !== action.payload.taskId),
    } : {
      ...taskList,
    })),
  } : {
    ...todo,
  })),
});
const changeTaskStatus = (state: StateType, action): StateType => ({
  ...state,
  todos: state.todos.map((todo) => (todo.id === action.payload.todoId ? {
    ...todo,
    tasksList: todo.tasksList.map((taskList) => (taskList.id === action.payload.taskListId ? {
      ...taskList,
      tasks: taskList.tasks.map((task) => (task.id === action.payload.taskId ? {
        ...task,
        isDone: !task.isDone,
      } : {
        ...task,
      })),
    } : {
      ...taskList,
    })),
  } : {
    ...todo,
  })),
});

export {
  addTodo, deleteTodo, addTaskList, deleteTaskList, addTask, deleteTask, changeTaskStatus,
};
