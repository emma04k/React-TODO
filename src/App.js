import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
//import './App.css';

const todos = [
  {text: 'cortar cebolla', complete: false},
  {text: 'contestar las llamadas perdidas', complete: false},
  {text: 'echar gasolina a la moto', complete: false}
];

function App() {
  return (
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
            {todos.map(todo =>(
                <TodoItem key={todo.text} text={todo.text}/>
            ))}

        </TodoList>
        <CreateTodoButton/>

      </React.Fragment>
  );
}

export default App;
