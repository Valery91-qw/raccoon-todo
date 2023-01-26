import {ChangeEvent} from "react";

type InputTaskParamsTypes = {
    todoId: string
    taskListId: string

};

type ChangeEventHandlerType = ChangeEvent<HTMLInputElement>

export {
    InputTaskParamsTypes,
    ChangeEventHandlerType,
};