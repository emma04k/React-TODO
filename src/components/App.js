import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
//import './App.css';

const todos = [
  {text: 'cortar cebolla', completed: false},
  {text: 'contestar las llamadas perdidas 15', completed: true},
  {text: 'echar gasolina a la moto', completed: false}
];

function App() {
  return (
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
            {todos.map(todo =>(
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
            ))}

        </TodoList>
        <CreateTodoButton/>

      </React.Fragment>
  );
}

export default App;
