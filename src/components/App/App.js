import React from "react";
import { AppUI } from './AppUI';


// const defaultTodos = [
//   {text: 'cortar cebolla', completed: false},
//   {text: 'contestar las llamadas perdidas 15', completed: true},
//   {text: 'echar gasolina a la moto', completed: false},
//   {text: 'ir tecbaco a trabajar', completed: false},
//   {text: 'viajar a Riofrio por ropa', completed: false},
// ];

function useLocalStorage(itemName,initialValue){
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(()=>{
        setTimeout(()=>{
            try {

                const localStorageItem = localStorage.getItem(itemName);
                let parseItem;

                if (!localStorageItem){
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parseItem = initialValue;
                }else {
                    parseItem = JSON.parse(localStorageItem);
                }

                setItem(parseItem);
                setLoading(false);
            }catch (error){
                setError(error);
            }


        },1000 );

    });


    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        }catch (error){
            setError(error);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    };


}

function App() {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    }= useLocalStorage('TODOS_V1',[])
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
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
    }

  return (
        <AppUI
            error ={error}
            loading = {loading}
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
