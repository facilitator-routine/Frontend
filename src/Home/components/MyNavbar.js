import React from "react";
import {Navbar, Container} from "react-bulma-components";

const MyNavbar = () =>{
    return (
        <Container>
            <Navbar >
                <Navbar.Brand>
                    <Navbar.Item href="/">
                        <img className={"App-logo"}
                            alt="Facilitator routine"
                            src="./logo.png"
                            width="112"
                        />
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item href="/timekeeper">
                                Cronometro
                        </Navbar.Item>
                        <Navbar.Item href="/countdown">
                                Cuenta Regresiva
                        </Navbar.Item>
                        <Navbar.Item href="/routines">
                            Mis Rutinas
                        </Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container align="end">
                        <Navbar.Item href="#">
                            <Navbar.Link>
                              Mi Cuenta
                            </Navbar.Link>
                            <Navbar.Dropdown>
                                <Navbar.Item href="#">
                                    Configuración
                                </Navbar.Item>
                                <Navbar.Item href="#">
                                    Cerrar Sesión
                                </Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </Container>
    )
}

export default MyNavbar