import React from "react";
import "./TodoCounter.css"


function TodoCounter({totalTodos, completedTodos}) {
        let text = 'Has completado ' + completedTodos + ' de '+ totalTodos + ' TODOS';
    {!totalTodos && (text = 'No Tienes TODOS Pendientes')}
    return(

        <h2 className="TodoCounter">{text}</h2>
    );
}

export { TodoCounter };