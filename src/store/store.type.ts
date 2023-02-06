export type TaskType = {
    id: string,
    title: string
    description: string
    isDone: boolean
};

export type TaskListType = {
    id: string
    title: string
    tasks: Array<TaskType>
};

export type TodoType = {
    id: string,
    todoTitle: string,
    tasksList: Array<TaskListType>
};

export type StateType = {
    todos: Array<TodoType>
    addTodo: (title: string) => void
    deleteTodo: (id: string) => void
    addTaskList: (todoId: string, date: Date) => void;
    deleteTaskList: (todoId: string, taskListId: string) => void

    addTask: (todoId: string, taskListId: string, title: string, description: string) => void
    deleteTask: (todoId: string, taskListId: string, taskId: string) => void
    changeTaskStatus: (todoId: string, taskListId: string, taskId: string) => void
};