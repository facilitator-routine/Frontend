import {Container} from "react-bulma-components";
import RunRoutineLayout from "./RunRoutineLayout";
import {useState} from "react";
import ViewListRoutines from "./ViewListRoutines";

function RoutineFlow() {
    const [runRoutine, setRunRoutine] = useState(false)

    return (
        <Container>
            {runRoutine? <RunRoutineLayout/>: <ViewListRoutines/>}
        </Container>
    );
}

export default RoutineFlow;