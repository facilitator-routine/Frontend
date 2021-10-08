import React from "react";
import {Modal, Container} from "react-bulma-components";
import Form from "./Form";
import {saveRoutine, updateRoutines} from "../services";
const MyModal = ({isModalOpen, setIsModalOpen, loadRoutines, routine}) =>{
    const titulo = routine?"Editar Rutina":"Crear Rutina"
    const handlerSubmit = async (data) => {
        if(routine){
            await updateRoutines(data)
        }
        else{await saveRoutine(data)}
        _onClose()
    }
    const _onClose=()=>{
        setIsModalOpen(false)
        loadRoutines()
    }
    return (
        <Container>
                <Modal show={isModalOpen} onClose={_onClose}>
                    <Modal.Card>
                        <Modal.Card.Header>
                            <Modal.Card.Title>
                                {titulo}
                            </Modal.Card.Title>
                        </Modal.Card.Header>
                        <Modal.Card.Body>
                            <Form handlerSubmit={handlerSubmit} routine={routine}>
                            </Form>
                        </Modal.Card.Body>
                    </Modal.Card>
                </Modal>
        </Container>
)
}
export default MyModal