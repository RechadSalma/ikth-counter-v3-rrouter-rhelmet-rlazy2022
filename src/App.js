import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Side from "./pages/Side.js";
import ErrorPage from "./pages/404.js";

const App = (props) => {
    console.log(props);

    return (
        <React.Fragment>
            <div className="AppComponent">iK App working</div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="side" element={<Side />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </React.Fragment>
    );
}; /*END App component*/

export default App;
