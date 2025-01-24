import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
import Create from "./pages/Marketplace/Create/Create";
import Item from "./pages/Marketplace/Create/Item/Item";
import Vehicle from "./pages/Marketplace/Create/Vehicle/Vehicle";
import Rental from "./pages/Marketplace/Create/Rental/Rental";

const routes = [
    { path: "/", element: <><h1>undefined</h1></> },
    { path: "/marketplace", element: <><h1>undefined</h1></> },
    { path: "/marketplace/create", element: <Create /> },
    { path: "/marketplace/create/item", element: <Item /> },
    { path: "/marketplace/create/vehicle", element: <Vehicle /> },
    { path: "/marketplace/create/rental", element: <Rental /> },
];

const App: React.FC = () => {

    return (

        <div className={styles.container}>
            <Router>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
