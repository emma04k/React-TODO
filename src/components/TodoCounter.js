import React from "react";
import "./TodoCounter.css"

function TodoCounter({completedTodos, totalTodos}) {
    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOS</h2>
    );
}

export { TodoCounter };