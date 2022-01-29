import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home.js";
import Side from "./pages/SideP.js";
import ErrorPage from "./pages/404.js";

const App = (props) => {
    console.log(props);

    return (
        <React.Fragment>
            <div className="AppComponent">iK App working</div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="side" element={<Side />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </React.Fragment>
    );
}; /*END App component*/

export default App;
