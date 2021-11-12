import React from "react";
import ClockLayout from "./ClockLayout";

function Countdown() {
    return (
            <ClockLayout initialSecond={0} initialMinute={0} isCountDown={true} configuredFlag={true}/>
    );
}

export default Countdown;
