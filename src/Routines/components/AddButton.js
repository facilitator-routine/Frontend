import React from "react";
import {Button, Container, Section} from "react-bulma-components";

const AddButton = ({onClick}) =>{
    return (
        <Section>
            <Container>
                <div className="is-pulled-left">
                    <Button onClick={onClick} color="primary">Agregar</Button>
                </div>
            </Container>
        </Section>
    )
}

export default AddButton