import React from "react";
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoSearch.css';
import {TodoContext} from "../TodoContext/TodoContext";

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)
    const onSearchValueChange = (event)=>{
        setSearchValue(event.target.value);

    };
    return(
        <React.Fragment>
            <Form.Group className="center">
                <Form.Control
                    className="TodoSearch"
                    placeholder="Cebolla"
                    onChange={onSearchValueChange}
                    value={searchValue}
                />
            </Form.Group>
        </React.Fragment>

    );
}

export {TodoSearch};