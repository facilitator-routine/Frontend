import React from "react";
import {Container, Navbar} from "react-bulma-components";
import {Link} from "react-router-dom";
import {logout} from "../services";

const logoutAndRefresh = async (access_token)  =>{
    await logout(access_token)
    sessionStorage.removeItem('accessToken')
    window.location="/"
}
const MyNavbar = ({access_token}) =>{
    return (
        <Container>
            <Navbar className={"navbar"}>
                <Navbar.Brand>
                        <Link to="/" className="navbar-item">
                        <img className={"App-logo"}
                            alt="Facilitator routine"
                            src="/logo-name.png"
                            width="112"
                             height="10vmin"
                        />
                        </Link>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Link to="/timekeeper" className="navbar-item">
                            Cronómetro
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
                            <Link to="/" className="navbar-item">
                                <span className="material-icons">login</span> Login
                            </Link>:
                            <a className="navbar-item" onClick={()=>logoutAndRefresh(access_token)} >
                                <span className="material-icons">logout</span> Cerrar Sesión</a>
                        }
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </Container>
    )
}

export default MyNavbar