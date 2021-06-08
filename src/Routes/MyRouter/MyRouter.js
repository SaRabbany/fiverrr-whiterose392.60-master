import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Pages/Home/Home';

const MyRouter = () => {
    return (
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
    );
};

export default MyRouter;