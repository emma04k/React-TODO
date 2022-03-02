import React from "react";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import {TodoContext} from "../TodoContext/TodoContext";
import {Modal} from "../Modal/Modal";

function AppUI (){
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
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

            {!!openModal && (
                <Modal>
                    <p>{searchedTodos[0].text}</p>
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}
 export { AppUI };
