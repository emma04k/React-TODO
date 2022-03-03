import React from "react";
import {TodoContext} from "../TodoContext/TodoContext";
import {Form,Modal,Button,FormControl} from "react-bootstrap"


function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
        openModal
    }= React.useContext(TodoContext);

    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }






    return(
            <Modal show={openModal} onHide={onCancel} centered>
                <Form onSubmit={onSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Escribe Tu primer TODO!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control as="textarea" required placeholder="Cortar Cebolla" onChange={onChange}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={onCancel}>
                            Close
                        </Button>
                        <Button variant="outline-success" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>


    );

}
export {TodoForm}