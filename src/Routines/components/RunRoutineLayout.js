import Wizard from "./Wizard";
import React, {useEffect, useState} from "react";
import {findRoutine} from "../services";
import Timekeeper from "../../Clock/components/Timekeeper";
import Countdown from "../../Clock/components/Countdown";

const PageClock = ({item}) => {
    return (
        <div>
            <h1> <b>Nro Ítem: {item.order} </b> - {item.type} {item.name? "- " + item.name: null}</h1>
            {item.type === "Cuenta Regresiva"? <Countdown duration={item.duration} isStep={true}/> :  <Timekeeper isStep={true}/>
            }
        </div>
    );
};

const RunRoutineLayout = ({routineId}) =>{
    const [routine, setRoutine] = useState({ items: [] })
    useEffect( () => {
        async function findAndSetRoutine() {
            const res = await findRoutine(routineId)
            setRoutine(res.data.routine)
        }
        findAndSetRoutine()
    }, []);

    return (
        <>
            <Wizard>
                {
                    routine.items.map((item, index)=> (
                        <PageClock key={index} item={item}/>
                    ))
                }
            </Wizard>
        </>
    );
}
export default RunRoutineLayout;