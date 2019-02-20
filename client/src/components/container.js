// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React, { Component } from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';

// Material-UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { withFormik } from 'formik';
import Grid from '@material-ui/core/Grid';

// React components
import TextInputField from './searchfield';
import ListDiv from '../components/listdiv';


// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = theme => ({
    appBar: {
        backgroundColor: '#57577b',
        height: '3.5em',
        [theme.breakpoints.up(599)]: {
            height: '3.7em',
        }
    },
    gridContainer: {
        justifyContent: 'space-around',
        backgroundColor: '#d6c0c0'
    }
});

// ------------------------------------------------------------------------------------------- //

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedValue: ''
        }
        this.passSetValueToQuery = this.passSetValueToQuery.bind(this);
    }

    // Until I find an easier way to use Formiks handleSubmit -
    // I'm saving the value fired on Formiks handleSubmit to local state
    // And passing it down to Apollos Query component
    passSetValueToQuery = () => {
        const { values } = this.props;
        this.setState({
            submittedValue: values.search
        })
    };

    render() {
        const { values, classes, handleChange } = this.props;
        const { submittedValue } = this.state;
        return (
            <React.Fragment>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        {/* Search field */}
                        <TextInputField 
                            values={values.search}
                            handleChange={handleChange}
                            submittedValue={() => this.passSetValueToQuery()}
                        />
                    </Toolbar>
                </AppBar>
    
            <Grid container className={classes.gridContainer}>
                <ListDiv
                    singleTitle={submittedValue}
                />
            </Grid>
            </React.Fragment>
        )
    }
};

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
            await setSubmitting(false)
    }
})(Container);

// ------------------------------------------------------------------------------------------- //

Container.propTypes = {
    classes: PropTypes.object.isRequired
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

SearchField = withStyles(styles)(SearchField);

export default withRouter(SearchField);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //