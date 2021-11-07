import React from "react";
import {Container, Navbar} from "react-bulma-components";
import {Link} from "react-router-dom";
import {logout} from "../services";

const MyNavbar = ({access_token}) =>{
    return (
        <Container>
            <Navbar className={"navbar"}>
                <Navbar.Brand>
                        <Link to="/" className="navbar-item">
                        <img className={"App-logo"}
                            alt="Facilitator routine"
                            src="./logo.png"
                            width="112"
                             height="10vmin"
                        />
                        </Link>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Link to="/timekeeper" className="navbar-item">
                            Cronometro
                        </Link>
                        <Link to="/countdown" className="navbar-item">
                            Cuenta Regresiva
                        </Link>
                        <Link to="/routines" className="navbar-item">
                            Mis Rutinas
                        </Link>
                    </Navbar.Container>
                    <Navbar.Container align="end">
                        {!access_token ?
                            <Link to="/auth/login" className="navbar-item">
                                Login
                            </Link>:
                            <a className="navbar-item" onClick={()=>logout(access_token)} >Cerrar Sesion</a>
                        }
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </Container>
    )
}

export default MyNavbar