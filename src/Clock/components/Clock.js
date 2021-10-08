import React from "react";
import {Container} from "react-bulma-components";

const Clock = ({getMinutes, getSeconds}) =>{
    return (
        <Container>
            <h1 className="has-text-centered">{getMinutes()}:{getSeconds()}</h1>
        </Container>
    )
}
export default Clock