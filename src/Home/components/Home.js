import '../../App.css';
import {Container} from "react-bulma-components";
import React from 'react';
import Login from './Login'

function Home({token}) {
    return (
        <Container>
            {token? <span> Hola</span>:<Login/>}
        </Container>
    );
}
export default Home;
