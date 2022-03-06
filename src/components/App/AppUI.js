import React from "react";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import {TodoContext} from "../TodoContext/TodoContext";
import {TodoForm} from "../TodoForm/TodoForm";
import {TodosLoading} from "../TodosLoading/TodosLoading";
import Swal from "sweetalert2";

function AppUI (){
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    const errorAlert = () =>  {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo Salio Mal!',
        })
    }


    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {error && errorAlert()}
                {(loading && !error) && <TodosLoading/>}
                {(!loading && !searchedTodos.length && !error) && <p>!Crea tu primer TODO!</p>}

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

                    <TodoForm/>

            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}
 export { AppUI };
