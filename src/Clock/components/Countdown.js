import React from "react";
import ClockLayout from "./ClockLayout";

function Countdown({duration, isStep}) {
    const [m, s] = (duration || "").split(":")
    const minutes = parseInt(m) || 0
    const seconds = parseInt(s) || 0
    const flagStep = isStep || false
    return (
            <ClockLayout initialMinute={minutes} initialSecond={seconds} isCountDown={true} configuredFlag={!duration} isStep={flagStep}/>
    );
}
export default Countdown;
