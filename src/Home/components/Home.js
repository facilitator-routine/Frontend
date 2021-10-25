import '../../App.css';
import {Container} from "react-bulma-components";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import React from 'react';
import Login from './Login'
import WebPlayback from "../../Multimedia/Webplayback";

function Home() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const access_token = params.get('access_token');
    return (
        <Container>
            <MyNavbar/>
            <>
            { access_token ? <WebPlayback token={access_token} /> : <Login/> }
            </>
            <MyFooter/>
        </Container>
    );
}
export default Home;
