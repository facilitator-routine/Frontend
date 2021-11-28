import RunRoutineLayout from "./RunRoutineLayout";
import ViewListRoutines from "./ViewListRoutines";

function RoutineFlow({routineId}) {
    return (
        <>
            {routineId ? <RunRoutineLayout routineId={routineId} />: <ViewListRoutines/>}
        </>
    );
}
export default RoutineFlow;