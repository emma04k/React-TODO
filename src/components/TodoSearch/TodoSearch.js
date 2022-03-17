import React from "react";
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoSearch.css';


function TodoSearch({searchValue, setSearchValue, loading}) {
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
                    disabled={loading}
                />
            </Form.Group>
        </React.Fragment>

    );
}

export {TodoSearch};