import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
    const onCLickButton = ()=>{
        props.setOpenModal(prevStatus => !prevStatus);
    }

    return(
        <button
            className="CreateTodoButton"
            onClick={onCLickButton}


        >
            +
        </button>
    );

}
export {CreateTodoButton};