import RoutineLayout from "../../Routines/components/RoutineLayout";
import MyFooter from "../../Home/components/MyFooter";
import MyNavbar from "../../Home/components/MyNavbar";
import {Container} from "react-bulma-components";
function MyRoutines() {
    return (
        <Container>
            <MyNavbar></MyNavbar>
            <RoutineLayout/>
            <MyFooter/>
        </Container>
    );
}

export default MyRoutines;
