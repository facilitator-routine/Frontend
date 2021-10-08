import '../../App.css';
import {Container} from "react-bulma-components";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
function Home() {
  return (
   <Container>
       <MyNavbar></MyNavbar>
        <h1>Soy una home</h1>
       <MyFooter/>
   </Container>
  );
}

export default Home;
