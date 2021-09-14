import { Input } from "./AddTodoStyled";
import React from "react";

const AddTodoField = (props) => {
    return(
    <>
        <input>{props.children}</input> <button>Adicionar</button>
    </>
    )
}

export default AddTodoField