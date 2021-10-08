import React, {useEffect, useState} from "react";
import {Container} from "react-bulma-components";
import Clock from "./Clock";
import ClockControls from "./ClockControls";
const ClockLayout = () =>{
    return (
        <Container>
            <Clock></Clock>
            <ClockControls></ClockControls>
        </Container>
    )
}
export default ClockLayout