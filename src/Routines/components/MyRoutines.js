import RoutineLayout from "../../Routines/components/RoutineLayout";
import {Container} from "react-bulma-components";
import React from "react";

function MyRoutines({token}) {
    return (
        <Container>
            {token?  <RoutineLayout/> :
                <div className={"main-wrapper"}>
                    <span>
                        Por favor, inicie sesión para ver sus rutinas guardadas
                    </span>
                </div>
            }
        </Container>
    );
}

export default MyRoutines;
