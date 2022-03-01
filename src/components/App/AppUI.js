import React from "react";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";

function AppUI (
    {
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }
){
    return(
        <React.Fragment>
            <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {error && <p>¡ERROR! preocupate compa...</p>}
                {(loading && !error) && <p>Esta cargando no te deseperes...</p>}
                {(!loading && !searchedTodos.length && !error) && <p>!Crea tu primer TODOS!</p>}

                {searchedTodos.map(todo =>(
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={()=> completeTodo(todo.text)}
                        onDelete={()=> deleteTodo(todo.text)}
                    />
                ))}

            </TodoList>
            <CreateTodoButton/>

        </React.Fragment>
    );
}
 export { AppUI };
