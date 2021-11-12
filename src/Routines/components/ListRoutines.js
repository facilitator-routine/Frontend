import React, {useState} from "react";
import {Card, Columns, Container, Content, Heading, Image} from "react-bulma-components";
import MyModal from "./MyModal";
import {deleteRoutine} from "../services";

const ListRoutines = ({routines, loadRoutines}) =>{
    const [isModalOpenParam, setIsModalOpen] = useState(false)
    const [routineActual, setRoutineActual] = useState(null)

    return(
        <Container>
          <Columns>
              {
                  routines.map((routine)=> (
                      <Columns.Column size="4" key={routine._id}>
                          <Card>
                              <Image src="./../logo2.png" size={6}/>
                              <Card.Content>
                                <Content>
                                    <Heading>{routine.name}</Heading>
                                    <Heading subtitle size={6}>{routine.description}</Heading>
                                    <Card.Footer>
                                        <a href="#" className="card-footer-item">Ejecutar</a>
                                        <a onClick={()=>{setIsModalOpen(true); setRoutineActual(routine)}} className="card-footer-item">Editar</a>
                                        <a onClick={()=>{deleteRoutine({routine});loadRoutines()}} className="card-footer-item">Eliminar</a>
                                    </Card.Footer>
                                </Content>
                            </Card.Content>
                          </Card>
                      </Columns.Column>
                  ))                  }

          </Columns>
         <MyModal isModalOpen={isModalOpenParam} setIsModalOpen={setIsModalOpen} routine = {routineActual} loadRoutines={loadRoutines}></MyModal>
        </Container>
            )

}
export default ListRoutines