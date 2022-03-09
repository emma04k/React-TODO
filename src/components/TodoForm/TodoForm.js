import React from "react";
import {Form,Modal,Button} from "react-bootstrap"


function TodoForm(
    {
        addTodo,
        setOpenModal,
        openModal,
        totalTodos
    }
){
    const [newTodoValue, setNewTodoValue] = React.useState('');



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

    let title='¡Escribe un Nuevo TODO!'
    {!totalTodos && (title = '¡Escribe Tu Primer TODO!')}



    return(
            <Modal show={openModal} onHide={onCancel} centered>

                <Form onSubmit={onSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
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