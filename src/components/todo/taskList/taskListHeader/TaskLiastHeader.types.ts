import {Dispatch, SetStateAction} from "react";

type TaskListHeaderType = {
    id: string,
    todoId: string
    title: string,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default TaskListHeaderType;