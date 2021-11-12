import React from "react";
import ClockLayout from "./ClockLayout";

function Timekeeper() {
        return (
                <ClockLayout initialSecond={0} initialMinute={0} isCountDown={false} configuredFlag={false} />
        );
}

export default Timekeeper;
