import React, {useState} from "react";
import {Button, Form as BulmaForm} from "react-bulma-components";
import ItemRoutine from "./ItemRoutine";

const {Field, Control, Label , Input} = BulmaForm

const Form = ({handlerSubmit, routine: {_id, alarm, background, description, name, items}}) =>{
    const itemsToData = items && items.map((item, index) => ({order: index+1, type: item.type, duration: item.duration}))
    const [errors, setErrors] = useState({"name":""})
    const [formValue, setFormValue] = useState({
        _id: _id || '',
        name: name ||``,
        description: description || ``,
        items: itemsToData || [],
        alarm: alarm || ``,
        background: background || ``
    })
    const setItems = (items) => {
        setFormValue(prevFormValue => {
            return { ...prevFormValue, items: items.map((item, index) => [index +1, ...item]) }
        })
    }
    const handlerChange = (event) =>{
        const {name, value} = event.target
        setFormValue(prevFormValue => {
           return {...prevFormValue, [name]:value}
        })
    }
    const _handlerSubmit = (event) => {
        event.preventDefault()
        if (handleValidation()) {
            handlerSubmit({...formValue})
        }
    }
    const handleValidation= (event) => {
        let formIsValid = true;
        if (!formValue["name"]) {
            formIsValid = false;
            setErrors({...errors, name: 'Nombre no puede ser vacio'});
        }
        return formIsValid;
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
                    * Nombre de la Rutina
                </Label>
                <Control>
                    <Input placeholder="Nombre de rutina"
                    name="name"
                    value={formValue.name}
                    onChange={handlerChange}>
                    </Input>
                </Control>
                <span style={{ color: "red" }}>{errors["name"]}</span>
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
                   * Los items de tu rutina
                </Label>
                <ItemRoutine items={formValue.items} setItems={setItems}/>
            </Field>
            <Button color="primary" type="submit">Guardar</Button>
        </form>
    )
}


export default Form