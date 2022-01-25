import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
    const onCLickButton = (msg)=>{
        alert(msg)
    }

    return(
        <button
            className="CreateTodoButton"
            onClick={()=>onCLickButton("se hizo todo bello")}


        >
            +
        </button>
    );

}
export {CreateTodoButton};