import {Container} from "react-bulma-components";
import React from "react";
import RoutineFlow from "./RoutineFlow";


const TokenRequired = () => {
    return (
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
    );
};
function MyRoutines({token, routineId} ) {
    return (
        <Container>
            {token?  <RoutineFlow routineId={routineId}/> :<TokenRequired/>}
        </Container>
    );
}

export default MyRoutines;
