import React, {useState} from "react";
import {Form as BulmaForm, Button} from "react-bulma-components";
const {Field, Control, Label , Input} = BulmaForm
const Form = ({handlerSubmit}) =>{


    const [formValue, setFormValue] = useState({

        name:``,
        description:``,
        steps:1,
        alarm:``,
        background:``
    })
    const handlerChange = (event) =>{
        const {name, value} = event.target
        setFormValue({...formValue, [name]:value})

    }
    const _handlerSubmit = (event) => {
        event.preventDefault()
        handlerSubmit({...formValue})
    }
    return (
        <form onSubmit={_handlerSubmit}>
            <Field>
                <Label>
                    Nombre de la Rutina
                </Label>
                <Control>
                    <Input placeholder="textinput"
                    name="name"
                    value={formValue.name}
                    onChange={handlerChange}>

                    </Input>
                </Control>
            </Field>
            <Field>
                <Label>
                    Descripción
                </Label>
                <Control>
                    <Input placeholder="textinput"
                           name="description"
                           value={formValue.description}
                           onChange={handlerChange}>

                    </Input>
                </Control>
            </Field>
            <Field>
                <Label>
                    Cantidad de pasos
                </Label>
                <Control>
                    <Input placeholder="number"
                           type="number"
                           name="steps"
                           value={formValue.steps}
                           onChange={handlerChange}>
                    </Input>
                </Control>
            </Field>
            <Field>
                <Label>
                    Sonido de alarma
                </Label>
                <Control>
                    <Input placeholder="textinput"
                           name="alarm"
                           value={formValue.alarm}
                           onChange={handlerChange}>

                    </Input>
                </Control>
            </Field>
            <Field>
                <Label>
                    Fondo
                </Label>
                <Control>
                    <Input placeholder="textinput"
                           name="background"
                           value={formValue.background}
                           onChange={handlerChange}>

                    </Input>
                </Control>
            </Field>
            <Button color="primary" type="submit">Guardar</Button>
        </form>
    )
}


export default Form