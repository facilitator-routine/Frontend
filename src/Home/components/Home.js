import '../../App.css';
import {Container} from "react-bulma-components";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";

function Home() {
  return (
   <Container>
       <MyNavbar></MyNavbar>

        <span>Soy una home. Proximamente login aqui</span>
       <MyFooter/>
   </Container>
  );
}

export default Home;
