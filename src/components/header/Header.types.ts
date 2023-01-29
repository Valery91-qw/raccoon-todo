import React, {ChangeEvent} from "react";

type EventHandlerAddTodoType = React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>
type HandleChangeType = ChangeEvent<HTMLInputElement>

export {
    EventHandlerAddTodoType,
    HandleChangeType
}