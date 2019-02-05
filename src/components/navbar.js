// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import PropTypes from 'prop-types';

// Material-UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

// React components
import SearchField from './searchfield';


// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = theme => ({
    appBar: {
        backgroundColor: '#7b85a9',
        height: '3.5em',
        [theme.breakpoints.up(599)]: {
            height: '3.7em',
        }
    }
});

// ------------------------------------------------------------------------------------------- //

const Navbar = props => {
    const { classes } = props;
    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar style={{ justifyContent: 'space-evenly' }}>
                    <SearchField />
                </Toolbar>
            </AppBar>
        </div>
    )
};

// ------------------------------------------------------------------------------------------- //

Navbar.propTypes = {
    classes: PropTypes.object.isRequired
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default withStyles(styles)(Navbar);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //