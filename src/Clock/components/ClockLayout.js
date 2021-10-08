import React, {useEffect, useRef, useState} from "react";
import ClockControls from "./ClockControls";
import {Button, Container, Form as BulmaForm} from "react-bulma-components";

const {Input} = BulmaForm


const ClockLayout = ({initialSecond, initialMinute, configuredFlag, isCountDown}) =>{
    const [seconds, setSeconds] = useState(initialSecond)
    const [minuts, setMinuts] = useState(initialMinute)
    const [isConfiguring, setIsConfiguring] = useState(configuredFlag)


    let intervalRef = useRef(0);

    const getSeconds = () => {
        return seconds
    }
    const getMinutes = () => {
        return minuts
    }
    const stop = () => {
        setMinuts(0)
        setSeconds(0)
        clearInterval(intervalRef.current)
        intervalRef.current = 0
        if(isCountDown){
            setIsConfiguring(true)
        }
    }
    const pause = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = 0
    }
    const decreaseTime = () => {
        let hasPreviousMinute = false
        setSeconds((prev) => {
            if (prev>0) {
                return prev - 1;
            } else if(prev===0){
                hasPreviousMinute = true
                return 59;
            }
        })

        if (hasPreviousMinute) {
            setMinuts((prev) => {
                if (prev > 0) {
                    return prev - 1;
                } else{
                    stop()
                    return 0;
                }
            })
        }
    }

    const increaseTime = () => {
        let hasNextMinute = false
        setSeconds((prev) => {
            if (prev<59) {
                return prev + 1;
            } else if(prev===59){
                hasNextMinute = true
                return 0;
            }
        })
        if (hasNextMinute) setMinuts((prevM) => prevM + 1)
        //return ('0' + minuts % 60).slice(-2)
    }
    const startDecrease = () => {
        if(!intervalRef.current){
            intervalRef.current = setInterval(decreaseTime, 1000)
        }
    }
    const startIncrease = () => {
        if(!intervalRef.current){
            intervalRef.current = setInterval(increaseTime, 1000)
        }
    }
    const handlerStart = () => {
        if(isCountDown){
            return startDecrease()
        }else{
            return startIncrease()
        }
    }
    const coffeBreck = () => {
        setMinuts(10)
        setSeconds(0)
        setIsConfiguring(false)

    }
    const handlerChangeMinutes = (event) =>{
        return setMinuts(parseInt(event.target.value))
    }
    const handlerChangeSeconds = (event) =>{
        return setSeconds(parseInt(event.target.value))
    }
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <Container>
            <div hidden={isConfiguring}>
                <span className="timer">{getMinutes()}:{getSeconds()}</span>
                <ClockControls onClickStop={stop} onClickStart={handlerStart} onClickPause={pause}></ClockControls>
            </div>
            <div hidden={!isConfiguring} className="countdown">
                <Input  class="input is-small"
                    placeholder="minutos"
                       min={0}
                       type="number"
                       name="minuts"
                       value={getMinutes()}
                       onChange={handlerChangeMinutes}>
                </Input> :
                <Input  class="input is-small"
                    placeholder="segundos"
                       min={0}
                       max={59}
                       type="number"
                       name="seconds"
                       value={getSeconds()}
                       onChange={handlerChangeSeconds}>
                </Input>
                <Button onClick={()=>setIsConfiguring(false)} color="primary">OK!</Button>
                <Button onClick={coffeBreck} color="primary">Coffe Breck</Button>

            </div>

        </Container>
    )
}
export default ClockLayout