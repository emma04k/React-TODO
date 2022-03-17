import React from "react";
import './TodoList.css'

function TodoList(props) {
    const renderFunction = props.render || props.children;
    return(
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchTodos(props.searchValue)}


            <ul>
                {props.searchedTodos.map(props.render)}
            </ul>
        </section>
    );
}

export {TodoList};