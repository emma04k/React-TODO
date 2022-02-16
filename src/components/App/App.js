import React from "react";
import { AppUI } from './AppUI';

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
        <AppUI
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
  );
}

export default App;
