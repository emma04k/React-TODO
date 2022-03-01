import React from "react";
import { AppUI } from './AppUI';
import {TodoProvider} from "../TodoContext/TodoContext";


// const defaultTodos = [
//   {text: 'cortar cebolla', completed: false},
//   {text: 'contestar las llamadas perdidas 15', completed: true},
//   {text: 'echar gasolina a la moto', completed: false},
//   {text: 'ir tecbaco a trabajar', completed: false},
//   {text: 'viajar a Riofrio por ropa', completed: false},
// ];



function App() {
  return(
      <TodoProvider>
          <AppUI/>
      </TodoProvider>
  );
}

export default App;
