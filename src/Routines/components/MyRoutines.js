import RoutineLayout from "../../Routines/components/RoutineLayout";
import {Container} from "react-bulma-components";
import React from "react";

function MyRoutines({token}) {
    return (
        <Container>
            {token?  <RoutineLayout/> :
                <div className={"Content-Home"}>
                <div className={"leyend"}>
                    <span>
                        Por favor, inicie sesión para ver sus rutinas guardadas
                    </span>
                </div>
                <img className={"App-Home"}
                alt="Facilitator routine"
                src="./logo-removebg.png"/>
                </div>
            }
        </Container>
    );
}

export default MyRoutines;
