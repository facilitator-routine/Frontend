import React from "react";
import {Container} from "react-bulma-components";
import MyNavbar from "../../Home/components/MyNavbar";
import ClockLayout from "./ClockLayout";
import MyFooter from "../../Home/components/MyFooter";

function Timekeeper() {

    return (
        <Container>
            <MyNavbar></MyNavbar>
            <ClockLayout initialSecond={0} initialMinute={0}></ClockLayout>
            <MyFooter/>
        </Container>
    );
}

export default Timekeeper;
