// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import div from '../pages/div';

// Components
import Navbar from '../components/navbar';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const RouteContainer = () => {
    return (
        <React.Fragment>
            <CssBaseline>
                <Navbar />
                <Router>
                    <Switch>
                        <Route exact path='/' component={div} />
                        <Route path='/movie' />
                    </Switch>
                </Router>
            </CssBaseline>
        </React.Fragment>
    )
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default RouteContainer;

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //
