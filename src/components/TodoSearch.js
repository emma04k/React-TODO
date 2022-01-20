import React from "react";
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoSearch.css';

function TodoSearch() {
    return(
        <React.Fragment>
            <Form.Group className="center">
                <Form.Control className="TodoSearch"  placeholder="Cebolla"/>
            </Form.Group>
        </React.Fragment>

    );
}

export {TodoSearch};