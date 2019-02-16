// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import div from '../pages/div';

// Components
import Container from '../components/container';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const RouteContainer = () => {
    return (
        <React.Fragment>
            <CssBaseline>
                <Container />
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
