// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form } from 'formik';

// Material-UI components
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

// Apollo-Graphql
import { client } from '../apolloclient/apolloclient';

// Queries
import { RETRIEVE_TITLE } from '../apolloclient/queries';

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
    form: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly'
    }
});

let TextInputField = props => {
    const { values, classes, handleChange } = props;
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
                    value={values.search}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <SearchIcon
                                    aria-label="Submit form"
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
            </Form>
        </React.Fragment>
    )
};

// ------------------------------------------------------------------------------------------- //

let SearchField = 
    withFormik({
        mapPropsToValues({ values }) {
            // If props being passed into search exists, used that
            // Else return an empty field by default
            return {
                search: values || ''
            }
        },
        handleSubmit: async (values, { setSubmitting }) => {
            const result = await client.query({ 
                query: RETRIEVE_TITLE,
                variables: {
                    singleTitle: values.search
                }
            });
            console.log(values)
            console.log(result)
            setSubmitting(false)
        }
})(TextInputField);

// ------------------------------------------------------------------------------------------- //

SearchField.propTypes = {
    classes: PropTypes.object.isRequired
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

TextInputField = withStyles(styles)(TextInputField);
SearchField = withStyles(styles)(SearchField);

export default SearchField;

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //