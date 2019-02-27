// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';

// Material-UI components
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
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
    input: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px #bdf5fbc2 inset"
        }
    },
    form: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
});

// ------------------------------------------------------------------------------------------- //

let Searchfield = props => {
    const { values, classes, handleChange, submittedValue, isSubmitting } = props;
    return (
        <React.Fragment>
            <Form className={classes.form}>
                <TextField
                    className={classes.textField}
                    id="search"
                    type="search"
                    margin="normal"
                    variant="filled"
                    name="search"
                    placeholder="Search by title"
                    value={values}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton 
                                type="submit"
                                // Prop that saves the value of Formik's handleSubmit to local state in container
                                // When submitting the form
                                onClick={submittedValue}
                                disabled={isSubmitting}
                            >
                                <SearchIcon
                                    aria-label="Submit form"
                                />
                            </IconButton> 
                        </InputAdornment>
                        ),
                        classes: { 
                            input: classes.input 
                        }
                    }}
                />
            </Form>
        </React.Fragment>
    )
};

// ------------------------------------------------------------------------------------------- //



// ------------------------------------------------------------------------------------------- //

Searchfield.propTypes = {
    classes: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    submittedValue: PropTypes.func,
    handleChange: PropTypes.func,
    values: PropTypes.string,
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

Searchfield = withStyles(styles)(Searchfield);

export default Searchfield;

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //