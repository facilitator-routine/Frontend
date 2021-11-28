import Wizard from "./Wizard";
import React from "react";
import {useHistory} from "react-router-dom";

const Page1 = () => {
    return (
        <div>
            <h1>Pagina 1</h1>
        </div>
    );
};

const Page2 = () => {
    return (
    <div>
        <h1>Pagina 2</h1>
    </div>
    );
};
const Page3 = () => {
    return (
    <div>
        <h1>Pagina 3</h1>
    </div>
    );
};

const ButtonBack = () => {
    const history = useHistory();

    const goToBack = () => {
        history.push("/routines")
    };
    return (
        <button type="button"
                   onClick={goToBack}
                   className="button is-primary is-light wizard_buttons">
            Volver
        </button>)
};

const RunRoutineLayout = ({routineId}) =>{

    // useEffect

    //hacer un page por item de step
    return (
        <>
            <ButtonBack />
            <Wizard>
                <Page1 />
                <Page2 />
                <Page3 />
            </Wizard>
        </>
    );
}
export default RunRoutineLayout;