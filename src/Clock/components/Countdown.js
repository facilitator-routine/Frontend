import React from "react";
import {Container} from "react-bulma-components";
import MyNavbar from "../../Home/components/MyNavbar";
import ClockLayout from "./ClockLayout";
import MyFooter from "../../Home/components/MyFooter";
function Countdown() {
    return (
        <Container>
            <MyNavbar></MyNavbar>
            <ClockLayout></ClockLayout>
            <MyFooter/>
        </Container>
    );
}

export default Countdown;
