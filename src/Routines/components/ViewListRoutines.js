import React, {useEffect, useState} from "react";
import ListRoutines from "./ListRoutines"
import MyModal from "./MyModal"
import 'react-bulma-components'
import {Button, Container} from "react-bulma-components";
import {getRoutines} from "../services";
import Loading from "./Loading";

const ViewListRoutines = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [routines, setRoutines ] = useState([])
    const [isModalOpenParam, setIsModalOpen] = useState(false)

    const routine = {
        _id: '',
        name:'',
        description: ``,
        steps: '',
        alarm:  ``,
        background: ``
    }
    async function loadRoutines(){
        const response = await getRoutines()
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
    return (
        <Container>
            <h2 className="title has-text-centered">
                Mis Rutinas
                {
                    !isLoading && <Button className="button is-primary is-light addRoutine" onClick={()=>setIsModalOpen(true)}>
                                <span className="material-icons">add_circle_outline</span> Crear</Button>
                }
            </h2>
            {
                isLoading && <Loading/>
            }
            {
                !isLoading && routines.length === 0 &&
                <h3 className="has-text-centered">No hay Rutinas creadas</h3>
            }
            {
                !isLoading && routines.length !== 0 && <ListRoutines routines={routines} loadRoutines={loadRoutines}/>
            }
            <MyModal isModalOpen={isModalOpenParam} setIsModalOpen={setIsModalOpen} loadRoutines={loadRoutines} routine={routine}/>
        </Container>
        )
}
export default ViewListRoutines