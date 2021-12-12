import React, {useState} from "react";
import {Card, Columns, Container, Content, Heading, Image} from "react-bulma-components";
import MyModal from "./MyModal";
import {deleteRoutine} from "../services";
import {useHistory} from "react-router-dom";

const ListRoutines = ({routines, loadRoutines}) =>{
    const [isModalOpenParam, setIsModalOpen] = useState(false)
    const [routineActual, setRoutineActual] = useState(null)
    let history = useHistory()

    const gotToRunRoutine = (routine) => {
        history.push(`/routines/${routine._id}`)
    }
    return(
        <Container data-testid="listRoutines">
          <Columns>
              {
                  routines.map((routine)=> (
                      <Columns.Column size="3" key={routine._id}>
                          <Card>
                              <Image src="./../logo2.png" size={4}/>
                              <Card.Content className={"mycard cutText"}>
                                <Content>
                                    <Heading title={routine.name} size={4}>{routine.name}</Heading>
                                    <h4  title={routine.description} subtitle size={6}>{routine.description || "-"}</h4>
                                    <Card.Footer>
                                        <a href="#" className={`card-footer-item ${routine.items?.length === 0 ? "itemEjecutarDisabled" : ""}`} onClick={()=>gotToRunRoutine(routine)} >Ejecutar</a>
                                        <a onClick={()=>{setIsModalOpen(true); setRoutineActual(routine)}} className="card-footer-item">Editar</a>
                                        <a data-testid={`deleteRoutine-${routine._id}`} onClick={()=>{deleteRoutine(routine);loadRoutines()}} className="card-footer-item">Eliminar</a>
                                    </Card.Footer>
                                </Content>
                            </Card.Content>
                          </Card>
                      </Columns.Column>
                  ))
              }
          </Columns>
         <MyModal isModalOpen={isModalOpenParam} setIsModalOpen={setIsModalOpen} routine = {routineActual} loadRoutines={loadRoutines}/>
        </Container>
    )
}
export default ListRoutines