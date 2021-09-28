import '../../App.css';
import {Container} from "react-bulma-components";
import MyNavbar from "./MyNavbar";
import RoutineLayout from "../../Routines/components/RoutineLayout";
import MyFooter from "./MyFooter";
function Home() {
  return (
   <Container>
       <MyNavbar/>
       <RoutineLayout/>
       <MyFooter/>
   </Container>
  );
}

export default Home;
