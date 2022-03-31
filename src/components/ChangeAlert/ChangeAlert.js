import React from 'react';
import {withStorageListener} from "./withStorageListener";
import button from "bootstrap/js/src/button";

function ChangeAlert({show, toggleShow}){
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
export {ChangeAlertWithStorageListener}