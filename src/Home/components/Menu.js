import React from "react";
import {Menu, Container} from "react-bulma-components";

const Menu = () =>{
    return (
        <Container>
            <Menu>
                <Menu.List title="Menu">
                    <Menu.List.Item>Dashboard</Menu.List.Item>
                    <Menu.List.Item>Customer</Menu.List.Item>
                </Menu.List>

            </Menu>
        </Container>
    )
}

export default Menu