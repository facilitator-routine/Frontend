import React from "react";
import ClockLayout from "./ClockLayout";

function Timekeeper({isStep}) {
        const flagStep = isStep || false
        return (
                <ClockLayout initialSecond={0} initialMinute={0} isCountDown={false} configuredFlag={false} isStep={flagStep}/>
        );
}
export default Timekeeper;
