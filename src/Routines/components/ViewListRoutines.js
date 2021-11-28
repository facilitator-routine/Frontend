import React, {useEffect, useState} from "react";
import Header from "./Header";
import AddButton from "./AddButton";
import ListRoutines from "./ListRoutines"
import MyModal from "./MyModal"
import 'react-bulma-components'
import {Container} from "react-bulma-components";
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
            <Header title={"Mis Rutinas"}/>
            {
                isLoading && <Loading/>
            }
            {
              !isLoading && <AddButton onClick={()=>setIsModalOpen(true)}/>
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