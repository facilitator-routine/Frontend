import React from "react";
import {Button, Container} from "react-bulma-components";
const ClockControls = ({onClickStart,onClickPause,onClickStop}) =>{
    return (
        <Container>
             <div className="is-pulled-right">
                 <Button onClick={onClickStart} color="primary">Start</Button>
                 <Button onClick={onClickPause} color="primary">Pause</Button>
                 <Button onClick={onClickStop} color="primary">Stop</Button>
                </div>
        </Container>
    )
}
export default ClockControls