import React from "react";
import {Button, Container} from "react-bulma-components";

const ClockControls = ({onClickStart,onClickPause,onClickStop}) =>{
    return (
        <Container>
             <div >
                 <Button className={"clockControl"} onClick={onClickStart} color="primary">Start</Button>
                 <Button className={"clockControl"} onClick={onClickPause} color="primary">Pause</Button>
                 <Button className={"clockControl"} onClick={onClickStop} color="primary">Stop</Button>
             </div>
        </Container>
    )
}
export default ClockControls