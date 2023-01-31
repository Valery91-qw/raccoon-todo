import {StateType} from "./reducer/reducer.types";

export type InitialContextType = {
    state: StateType
    addTodo: (title: string) => void,
    deleteTodo: (id: string) => void,
    addTaskList: (todoId: string, date: Date) => void,
    deleteTaskList: (todoId: string, taskListId: string) => void,
    addTask: (todoId: string, taskListId: string, title: string, description: string) => void,
    deleteTask: (todoId: string, taskListId: string, taskId: string) => void,
    changeTaskStatus: (todoId: string, taskListId: string, taskId: string) => void,
}