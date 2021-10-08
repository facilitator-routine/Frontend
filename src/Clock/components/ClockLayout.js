import React, {useEffect, useRef, useState} from "react";
import {Container} from "react-bulma-components";
import Clock from "./Clock";
import ClockControls from "./ClockControls";

const ClockLayout = ({initialSecond, initialMinute}) =>{
    const [seconds, setSeconds] = useState(initialSecond)
    let intervalRef = useRef(0);

    const getSeconds = () => {
        return ('0' + seconds % 60).slice(-2)
    }
    const getMinutes = () => {
        return Math.floor(seconds/60)
    }
    const stop = () => {
        setSeconds(0)
        clearInterval(intervalRef.current)
        intervalRef.current = 0
    }
    const pause = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = 0
    }
    const decreaseTime = () => setSeconds((prev) => prev - 1)
    const increaseTime = () => setSeconds((prev) => prev + 1)
    const startIncrease = () => {
        if(!intervalRef.current){
            intervalRef.current = setInterval(increaseTime, 1000)
        }
    }

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <Container>
            <Clock getMinutes={getMinutes} getSeconds={getSeconds}></Clock>
            <ClockControls onClickStop={stop} onClickStart={startIncrease} onClickPause={pause}></ClockControls>
        </Container>
    )
}
export default ClockLayout