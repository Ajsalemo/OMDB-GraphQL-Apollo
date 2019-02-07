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
import { titleQuery } from '../apolloclient/queries';
import { graphql, compose } from "react-apollo";

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

let SearchField = compose(
    graphql(titleQuery),
    withFormik({
        mapPropsToValues({ values }) {
            // If props being passed into search exists, used that
            // Else return an empty field by default
            return {
                search: values || ''
            }
        },
        handleSubmit: async (search, { props: { mutate }}) => {
            try {
                // Pass in the value 'search' from the form field
                // To the titleQuery mutation variable 'dynamicSearch'
                const { data } = await mutate({
                    variables: {
                        dynamicSearch: search
                    }
                });
                console.log(data.titleQuery)
            }   catch(error) {
                    console.log(error);
            }
            console.log(search)
        } 
    })
)(TextInputField);

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