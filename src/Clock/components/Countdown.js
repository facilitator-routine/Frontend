import React from "react";
import {Container} from "react-bulma-components";
import ClockLayout from "./ClockLayout";

function Countdown() {
    return (
        <Container>
            <ClockLayout initialSecond={0} initialMinute={0} isCountDown={true} configuredFlag={true}/>
        </Container>
    );
}

export default Countdown;
