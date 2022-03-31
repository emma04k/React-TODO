import React from 'react';
import {useStorageListener} from "./useStorageListener";
import button from "bootstrap/js/src/button";

function ChangeAlert({sincronize}){
    const {show, toggleShow} = useStorageListener(sincronize);
    if (show){
        return (
            <div>
                <button onClick={toggleShow()} ></button>
            </div>
        )
    }else {
        return null;
    }

}


export {ChangeAlert};