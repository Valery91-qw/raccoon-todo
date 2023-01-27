import React from "react";

type TodoHeaderType = {
  todoId: string,
  title: string
};

type TodoHeaderStateType = undefined | null | HTMLElement;

type TodoHeaderOpenHandler = React.MouseEvent<HTMLButtonElement>;

export {
    TodoHeaderType,
    TodoHeaderStateType,
    TodoHeaderOpenHandler
};