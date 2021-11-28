import {Container} from "react-bulma-components";
import RunRoutineLayout from "./RunRoutineLayout";
import ViewListRoutines from "./ViewListRoutines";

function RoutineFlow({routineId}) {
    return (
        <Container>
            <p> {routineId}</p>
            {routineId ? <RunRoutineLayout routineId={routineId} />: <ViewListRoutines/>}
        </Container>
    );
}

export default RoutineFlow;