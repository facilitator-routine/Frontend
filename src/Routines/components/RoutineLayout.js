import React, {useEffect, useState} from "react";
import Header from "./Header";
import AddButton from "./AddButton";
import ListRoutines from "./ListRoutines"
import MyModal from "./MyModal"
import 'react-bulma-components'
import {Container} from "react-bulma-components";
import {getRoutines} from "../services";
import Loading from "./Loading";


const RoutineLayout = () =>{
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

    const item = {
        _id: '',
        type:'',
        order: ``,
        duration: '',
        alarm:  ``,
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
            <Header title={"Mis Rutinas"}/>
            <AddButton onClick={()=>setIsModalOpen(true)}/>
            {
                isLoading && <Loading/>
            }
            {
              !isLoading && routines.length===0 && <h2 className="title has-text-centered">No hay Rutinas creadas</h2>
            }
            {
                !isLoading && routines.length !== 0 && <ListRoutines routines={routines} loadRoutines={loadRoutines}/>
            }
            <MyModal isModalOpen={isModalOpenParam} setIsModalOpen={setIsModalOpen} loadRoutines={loadRoutines} routine={routine}/>
        </Container>
        )
}
export default RoutineLayout