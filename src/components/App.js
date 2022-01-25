import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
//import './App.css';

const defaultTodos = [
  {text: 'cortar cebolla', completed: false},
  {text: 'contestar las llamadas perdidas 15', completed: true},
  {text: 'echar gasolina a la moto', completed: false},
  {text: 'ir tecbaco a trabajar', completed: false},
  {text: 'viajar a Riofrio por ropa', completed: false},
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');


    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    if(!searchValue.length >= 1){
        searchedTodos = todos;
    }else {
        searchedTodos = todos.filter( todo => {
            const todoText = todo.text.toLowerCase();
            const  searchText =  searchValue.toLowerCase();
            return todoText.includes(searchText);

            }
        );
    }

    const completeTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        setTodos(newTodos);
    }


  return (
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

export default App;
