import React, {useEffect, useRef, useState} from "react";
import {Button, Container, Form as BulmaForm} from "react-bulma-components";

const {Input, Label} = BulmaForm

const ClockLayout = ({initialSecond, initialMinute, configuredFlag, isCountDown, isStep}) =>{
    const [seconds, setSeconds] = useState(initialSecond)
    const [minuts, setMinuts] = useState(initialMinute)
    const [isConfiguring, setIsConfiguring] = useState(configuredFlag)

    const [errors, setErrors] = useState({})
    const [hayErrors, setHayErrors] = useState(false)

    const [isRunning, setRunning] = useState(false)

    let intervalRef = useRef(0);
    let audio = new Audio("/soundAlarm.mp3")
    audio.volume = 0.9;

    const getSeconds = () => {
        return seconds
    }
    const getMinutes = () => {
        return minuts
    }
    const clearCountDown = () => {
        setMinuts(0)
        setSeconds(0)
        clearInterval(intervalRef.current)
        intervalRef.current = 0
    }
    const stop = () => {
        clearCountDown()
        if(isCountDown && !isStep){
            setIsConfiguring(true)
        }
        setRunning(false)
    }
    const pause = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = 0
        setRunning(false)
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
                    playSound()
                    clearCountDown()
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
        setRunning(true)
        if(isCountDown){
            return startDecrease()
        }else{
            return startIncrease()
        }
    }
    const coffeeBreak = () => {
        setMinuts(10)
        setSeconds(0)
        setIsConfiguring(false)
    }
     const playSound = () => {
        audio.play()
    }
    const handlerChangeMinutes = (event) =>{
        return setMinuts(parseInt(event.target.value))
    }
    const disabledOkButton = () => {
      return (hayErrors || isZero() || isNaN(getSeconds()) || isNaN(getMinutes()))
    }
    const handlerChangeSeconds = (event) =>{
        const seconds= parseInt(event.target.value)
        const hayError = seconds > 59
        if(hayError){
            setErrors({...errors, seconds: 'Los segundos van de cero a cincuenta y nueve'});
           setHayErrors(hayError)
        }else{
            setErrors({...errors, seconds: ''});
        }
        setHayErrors(hayError)
        return setSeconds(parseInt(event.target.value))

    }
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    const getTimer = () => {
      return getMinutes().toString().padStart(2, "0")+':'+ getSeconds().toString().padStart(2, "0")
    }

    const isZero = () => {
        return getMinutes() === 0 && getSeconds() === 0
    }

    const isPlayDisabled = () => {
        return (isCountDown && isZero()) || isRunning
    }

    const isPauseDisabled = () => {
        return !isRunning
    }

    const reset = () => {
        setMinuts(initialMinute)
        setSeconds(initialSecond)
    }

    return (
        <Container className="clockLayoutContainer">
            <div hidden={isConfiguring}>
                <div className={`${isZero() && isCountDown ? "animacion" : ""}`}>
                    <span className="timer">{getTimer()}</span>
                </div>
                <Container className={"btn-clocks-actions"}>
                    <Button className={"clockControl"} onClick={handlerStart} color="primary" disabled={isPlayDisabled()}>
                        <span className="material-icons">play_arrow</span>
                    </Button>
                    <Button className={"clockControl"} onClick={pause} color="primary" disabled={isPauseDisabled()}>
                        <span className="material-icons">pause</span>
                    </Button>
                    <Button className={"clockControl"} onClick={stop} color="primary"><span
                        className="material-icons">stop</span>
                    </Button>
                        { isStep && <Button className={"clockControl"}  onClick={reset} color="primary" disabled={!isCountDown} alt="Repetir">
                            <span className="material-icons">replay</span>
                        </Button>
                        }
                </Container>
            </div>
            <div hidden={!isConfiguring}>
                <Label className="clockLabel">
                    Ingrese Minutos y segundos:
                </Label>
                <Input  className="input countdown-item"
                    placeholder="min" min={0} type="number" name="minuts"
                       value={getMinutes()}
                       onChange={handlerChangeMinutes}>
                </Input>
                <span  className="countdown-divisor">:</span>
                <Input  className="input countdown-item"
                    placeholder="seg" min={0} max={59} type="number" name="seconds"
                       value={getSeconds()} onChange={handlerChangeSeconds}>
                </Input>
                <div>
                    <span style={{ color: "red" }}>{errors["seconds"]}</span>
                </div>
                <div className={"btn-clocks"}>
                    <Button className={"clockControl"}  disabled={disabledOkButton()} onClick={()=>setIsConfiguring(false)} color="primary">
                        <span className="material-icons">done_outline</span>OK!
                    </Button>
                    <Button className={"clockControl"}  onClick={coffeeBreak} color="primary" placeholder="10 minutos">
                        <span className="material-icons">free_breakfast</span>Break
                    </Button>
                </div>
            </div>

        </Container>
    )
}
export default ClockLayout