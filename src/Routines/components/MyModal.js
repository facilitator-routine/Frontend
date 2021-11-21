import React, {useState} from "react";
import {Container, Modal} from "react-bulma-components";
import Form from "./Form";
import {saveRoutine, updateRoutines} from "../services";

const MyModal = ({isModalOpen, setIsModalOpen, loadRoutines, routine}) =>{
    const titulo = routine?._id?"Editar Rutina":"Crear Rutina"
    const [errorMessage, setErrorMessage] = useState("")

    const handlerSubmit = async (data) => {
        let result;
        if(routine?._id){
            result = await updateRoutines(data)
        }
        else{
            result = await saveRoutine(data)
        }
        if (result.errorMessage) {
            setErrorMessage(result.errorMessage)
        } else {
            _onClose()
        }
    }
    const _onClose=()=>{
        setErrorMessage("")
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
                            <p style={{ color: "red" }}>{ errorMessage }</p>
                            <Form handlerSubmit={handlerSubmit} routine={routine}>
                            </Form>
                        </Modal.Card.Body>
                    </Modal.Card>
                </Modal>
        </Container>
)
}
export default MyModal