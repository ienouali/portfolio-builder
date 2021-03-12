import React from "react";
import {Route, Switch} from "react-router-dom";
import Main from "./containers/main/Main";
import Home from "./pages/home/Home";
import Generator from "./pages/generator/Generator";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin/Admin";

function App() {
    return (
        <>
            <Navbar/>
            <Main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/generator" component={Generator}/>
                    <Route exact path="/admin" component={Admin}/>

                </Switch>
            </Main>
        </>
    );
}

export default App;
