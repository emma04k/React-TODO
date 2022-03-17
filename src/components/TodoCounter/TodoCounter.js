import React from "react";
import "./TodoCounter.css"


function TodoCounter({totalTodos, completedTodos, loading}) {
        let text = 'Has completado ' + completedTodos + ' de '+ totalTodos + ' TODOS';
    {!totalTodos && (text = 'No Tienes TODOS Pendientes')}
    return(
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>{text}</h2>
    );
}

export { TodoCounter };