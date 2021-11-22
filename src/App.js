import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home/components/Home";
import Countdown from "./Clock/components/Countdown";
import Timekeeper from "./Clock/components/Timekeeper";
import MyRoutines from "./Routines/components/MyRoutines";
import {Container} from "react-bulma-components";
import MyNavbar from "./Home/components/MyNavbar";
import MyFooter from "./Home/components/MyFooter";
import WebPlayback from "./Multimedia/Webplayback";

const Layout = ({ children, access_token }) => {
    return (
        <Container>
            <MyNavbar access_token={access_token} />
            {access_token && <WebPlayback token={access_token} /> }
            <div style={{"min-height":"80vh"}}>
                {children}
            </div>
            <MyFooter/>
        </Container>
    );
}

function App() {
    const [access_token, setAccessToken] = useState('')

    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const token = sessionStorage.getItem('accessToken')
        const t = token || params.get('t')
        if (t) {
            setAccessToken(t);
            sessionStorage.setItem('accessToken', t)
        }
    }, []);

    return (
            <Router>
                <Switch>
                    <Layout access_token={access_token}>
                        <Route exact path="/" children={
                            <Home token={access_token}/>
                        } />
                        <Route exact path="/routines" children={
                            <MyRoutines token={access_token}/>
                        } />
                        <Route exact path="/countdown" component={Countdown} />
                        <Route exact path="/timekeeper" component={Timekeeper} />
                        <Route exact path="/auth/login" children={
                            <Home token={access_token}/>
                        } />
                    </Layout>
                </Switch>
            </Router>
    );
}

export default App;