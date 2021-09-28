import React from "react";
import {Modal, Container} from "react-bulma-components";
import Form from "./Form";
import {saveRoutine} from "../services";
const MyModal = ({isModalOpen, setIsModalOpen, loadRutines}) =>{
    const handlerSubmit = async (data) => {
        await saveRoutine(data)
        _onClose()
    }
    const _onClose=()=>{
        setIsModalOpen(false)
        loadRutines()
    }
    return (
        <Container>
                <Modal show={isModalOpen} onClose={_onClose}>
                    <Modal.Card>
                        <Modal.Card.Header>
                            <Modal.Card.Title>
                                Crear Rutina
                            </Modal.Card.Title>
                        </Modal.Card.Header>
                        <Modal.Card.Body>
                            <Form handlerSubmit={handlerSubmit}>
                            </Form>
                        </Modal.Card.Body>
                    </Modal.Card>
                </Modal>
        </Container>
)
}
export default MyModal