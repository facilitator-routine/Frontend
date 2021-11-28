import Wizard from "./Wizard";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {findRoutine} from "../services";
import Timekeeper from "../../Clock/components/Timekeeper";
import Countdown from "../../Clock/components/Countdown";

const PageClock = ({item}) => {
    return (
        <div>
            <h1>Paso: {item.order}</h1>
            {item.type === "Cuenta Regresiva"? <Countdown duration={item.duration} isStep={true}/> :  <Timekeeper/>
            }
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
    const [routine, setRoutine] = useState({})
    useEffect(async () => {
        const res = await findRoutine(routineId)
        setRoutine(res.data.routine)
    }, []);
    console.log(routine)
    return (
        <>
            <ButtonBack />
            <Wizard>
                {
                    (routine?.items || []).map((item)=> (
                        <PageClock item={item}/>
                    ))
                }
            </Wizard>
        </>
    );
}
export default RunRoutineLayout;