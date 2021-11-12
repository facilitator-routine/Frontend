import '../../App.css';
import {Container} from "react-bulma-components";
import React from 'react';
import Login from './Login'

function Home({token}) {
    return (
        <Container className={"Content-Home"}>
            {token? <img className={"App-Home"}
                         alt="Facilitator routine"
                         src="./logo.png"/>:<Login/>}
        </Container>
    );
}
export default Home;
