import React from "react";
import "./TodoCounter.css"
import {TodoContext} from "../TodoContext/TodoContext";

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    let text = 'Has completado ' + completedTodos + ' de '+ totalTodos + ' TODOS';
    {!totalTodos && (text = 'No Tienes TODOS Pendientes')}
    return(

        <h2 className="TodoCounter">{text}</h2>
    );
}

export { TodoCounter };