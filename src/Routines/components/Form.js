import React, {useState} from "react";
import {Button, Form as BulmaForm} from "react-bulma-components";
import ItemRoutine from "./ItemRoutine";

const {Field, Control, Label , Input} = BulmaForm

const Form = ({handlerSubmit, routine: {_id, alarm, background, description, name, steps}}) =>{
    const [formValue, setFormValue] = useState({
        _id: _id || '',
        name: name ||``,
        description: description || ``,
        items: steps || [],
        alarm: alarm || ``,
        background: background || ``
    })

    const setItems = (items) => {
        console.log("log del items submit " + items)

        setFormValue({...formValue, items:items})
        console.log("log del form submit " + formValue)
    }
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
                <Control>
                    <Input
                           name="_id"
                           value={formValue._id}
                           type="hidden"
                    />
                </Control>
            </Field>
            <Field>
                <Label>
                    Nombre de la Rutina
                </Label>
                <Control>
                    <Input placeholder="Nombre de rutina"
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
                    <Input placeholder="Descripción"
                           name="description"
                           value={formValue.description}
                           onChange={handlerChange}>

                    </Input>
                </Control>
            </Field>
            <Field>
                <Label>
                   Los items de tu rutina
                </Label>
                <ItemRoutine items={formValue.items} setItems={setItems}/>
            </Field>
            <Button color="primary" type="submit">Guardar</Button>
        </form>
    )
}


export default Form