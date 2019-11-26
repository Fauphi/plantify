import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Popup from "./components/Popup/Popup";

function App() {
    const [popupStatus, setPopupStatus] = useState(false);

    return (
        <div className="App">
            <Dashboard popupFn={setPopupStatus} />
            <Popup status={popupStatus} popupFn={setPopupStatus}>
                <Dashboard popupFn={setPopupStatus} />
            </Popup>
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    );
}

export default App;
