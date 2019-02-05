// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Formik, Form, Field } from 'formik';

// Material-UI components
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = () => ({
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
    },
    formikForm: {
        width: '100%',
        justifyContent: 'space-evenly',
        display: 'flex'
    }
});

let TextInputField = ({ values, handleChange }) => {
    return (
        <React.Fragment>
            <TextField
                // className={classes.textField}
                id="search"
                type="search"
                margin="normal"
                variant="filled"
                name="search"
                value={values.search}
                onChange={handleChange}
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
                // className={classes.menuIcon}
                aria-label="Menu"
            />
        </React.Fragment>
    )
};

// ------------------------------------------------------------------------------------------- //

const SearchField = withFormik({
    mapPropsToValues() {
        return {
            search: 'test'
        }
    }
})(TextInputField);

// ------------------------------------------------------------------------------------------- //

SearchField.propTypes = {
    classes: PropTypes.object.isRequired
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

TextInputField =
    withStyles(styles)(TextInputField);

export default withStyles(styles)(SearchField);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //