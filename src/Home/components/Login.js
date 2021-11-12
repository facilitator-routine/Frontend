import React from 'react';
import '../../App.css';

function Login() {
    return (
        <div className="Content-Home">
            <div className="App-header">
                <img className={"Login-Spotify"}
                     alt="logo spotify"
                     src="./logo-spotify.jpeg"
                />
                <a className="btn-spotify" href="/v1/auth/login" >
                    Login with Spotify
                </a>
            </div>
        </div>
    );
}

export default Login;