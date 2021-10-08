import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from "./Home/components/Home";
import Countdown from "./Clock/components/Countdown";
import Timekeeper from "./Clock/components/Timekeeper";
import MyRoutines from "./Routines/components/MyRoutines";
function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route exact path="/routines" component={MyRoutines} />
                <Route exact path="/countdown" component={Countdown} />
                <Route exact path="/timekeeper" component={Timekeeper} />
            </div>
        </Router>
    );
}

export default App;