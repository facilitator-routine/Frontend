import React from 'react';
import '../../App.css';

function Login() {
    return (
        <div className="Content-Home">
            <div className="App-header">
                <img className={"Login-Spotify"}
                     alt="logo spotify"
                     src="./logo-spotify.png"
                />
                <a className="btn-spotify" href="/v1/auth/login" >
                    <span className="material-icons">login</span>Login with Spotify
                </a>
            </div>
        </div>
    );
}

export default Login;