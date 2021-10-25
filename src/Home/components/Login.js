import React from 'react';
import '../../App.css';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <a className="btn-spotify" href="/v1/auth/login" >
                    Login with Spotify
                </a>
            </header>
        </div>
    );
}

export default Login;