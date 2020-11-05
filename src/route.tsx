import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";



import View from './views';

export default function Routing() {
    return (
        <Router>
            <Route exact path="/" component={View.Home} />
        </Router>
    );
}