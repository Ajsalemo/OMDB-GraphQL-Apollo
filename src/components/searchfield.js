// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

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

let TextInputField = props => {
    const { classes } = props;
    return (
        <React.Fragment>
            <TextField
                className={classes.textField}
                id="searchField"
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
        </React.Fragment>
    )
};

// ------------------------------------------------------------------------------------------- //

const SearchField = props => {
    const { classes } = props;
    return (
        <Formik
            initialValues={{ search: '' }}
            render={({ errors, status, touched, isSubmitting }) => (
                <Form className={classes.formikForm}>
                    <Field 
                        name="search"
                        component={TextInputField}
                    />
                </Form>
            )}
        />
    )
};

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