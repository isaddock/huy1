import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import Register from './Register';
import Login from './Login';
import ChangePass from './ChangePass';
import ForgetPass from './ForgetPass';
import AddAcount from './AddAcount';
import Home from './Home'
import Librarian from './Librarian';
function Routes() {
  return (
    <Router>
        <Switch>
            <Route path="/register">
                <Register />
            </Route>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/ChangePass">
                <ChangePass />
            </Route>
            <Route path="/ForgetPass">
                <ForgetPass />
            </Route>
            <Route path="/AddAcount">
                <AddAcount />
            </Route>
            <Route path="/Librarian">
                <Librarian />
            </Route>
            <Route path="/Home">
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}

export default Routes;
