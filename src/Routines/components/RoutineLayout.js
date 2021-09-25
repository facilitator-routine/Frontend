import React, {useState, useEffect} from "react";
import Header from "./Header";
import AddButton from "./AddButton";
import ListRoutines from "./ListRoutines"
import Form from "./Form";
import 'react-bulma-components'
import {Modal, Container} from "react-bulma-components";
import {getRoutines, saveRoutine} from "../services";
import Loading from "./Loading";


const RoutineLayout = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [routines, setRoutines ] = useState([])
    async function loadRoutines(){
        const response = await getRoutines()
        console.log(response)
        if (response.status===200){
            setRoutines(response.data.routines)
        }
        setIsLoading(false)
    }
    useEffect(
        ()=>{
            loadRoutines()
        },[]
    )
    const handlerSubmit = async (data) => {
        await saveRoutine(data)
        loadRoutines()
        console.log(routines)
        setIsModalOpen(false)
    }
    return (
        <Container>
            <Header title={"Bienvenido a Facilitator Routine"}></Header>
            <AddButton onClick={()=>setIsModalOpen(true)}></AddButton>
            {
                isLoading && <Loading></Loading>
            }
            {
              !isLoading && routines.length===0 && <h2 className="title has-text-centered">No hay Rutinas creadas</h2>
            }
            {
                !isLoading && routines.length && <ListRoutines routines={routines}></ListRoutines>
            }

            <Modal show={isModalOpen} onClose={()=> setIsModalOpen(false)}>
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

export default RoutineLayout