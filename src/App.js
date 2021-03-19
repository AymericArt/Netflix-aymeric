import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './Component/Home/Home'
import NavBar from "./Component/Basics/NavBar";
import Footer from "./Component/Basics/Footer";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <NavBar />
                </nav>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}


export default App;