import React from "react";
import {Container} from "react-bulma-components";
import ClockLayout from "./ClockLayout";

function Timekeeper() {
        return (
            <Container>
                <ClockLayout initialSecond={0} initialMinute={0} isCountDown={false} configuredFlag={false} />
            </Container>
        );
}

export default Timekeeper;
