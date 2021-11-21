import Wizard from "./Wizard";
import React from "react";

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

const RunRoutineLayout = (routine) =>{

    //hacer un page por item de step
    return (
        <Wizard>
            <Page1 />
            <Page2 />
            <Page3 />
        </Wizard>
    );
}
export default RunRoutineLayout;