// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Components
import Container from '../components/container';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const THEME = createMuiTheme({
    typography: {
        fontFamily: 'Arimo'
    }
});

// ------------------------------------------------------------------------------------------- //

const RouteContainer = () => {
    return (
        <React.Fragment>
            <CssBaseline>
                <MuiThemeProvider theme={THEME}>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Container} />
                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </CssBaseline>
        </React.Fragment>
    )
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default RouteContainer;

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //
