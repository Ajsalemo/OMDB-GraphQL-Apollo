// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import PropTypes from 'prop-types';

// Material-UI components
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = theme => ({
    appBar: {
        backgroundColor: '#7b85a9',
        height: '3.5em',
        [theme.breakpoints.up(599)]: {
            height: '3.7em',
        }
    },
    toolBarTop: {
        width: '100%',
        justifyContent: 'space-evenly'
    },
    textField: {
        width: '70%',
        backgroundColor: '#fff',
        margin: '0',
        height: '2.7em'
    },
    menuIcon: {
        height: '1.5em',
        width: '1.5em',
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

// ------------------------------------------------------------------------------------------- //

const Navbar = props => {
    const { classes } = props;

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolBarTop}>
                    <TextField
                        className={classes.textField}
                        id="search-field"
                        label="Search by title"
                        type="search"
                        margin="normal"
                        variant="filled"
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon
                                    aria-label="Submit form"
                                    type="submit"
                                    />
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                    />
                    
                    <MenuIcon
                        className={classes.menuIcon}
                        aria-label="Menu"
                    />
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