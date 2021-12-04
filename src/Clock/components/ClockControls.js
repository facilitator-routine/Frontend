import React from "react";
import {Button, Container} from "react-bulma-components";

const ClockControls = ({onClickStart,onClickPause,onClickStop}) =>{
    return (
        <Container className={"btn-clocks-actions"}>
                 <Button className={"clockControl"} onClick={onClickStart} color="primary">
                     <span className="material-icons">play_arrow</span>
                 </Button>
                 <Button className={"clockControl"} onClick={onClickPause} color="primary">
                     <span className="material-icons">pause</span>
                 </Button>
                 <Button className={"clockControl"} onClick={onClickStop} color="primary"><span
                     className="material-icons">stop</span>
                 </Button>
        </Container>
    )
}
export default ClockControls