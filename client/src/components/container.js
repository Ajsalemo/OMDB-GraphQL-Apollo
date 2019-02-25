// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withFormik } from 'formik';
import PropTypes from 'prop-types';

// Material-UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// React components
import TextInputField from './searchfield';
import ListDiv from '../components/listdiv';
import Footer from '../components/footer';

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
    lowerAppBar: {
        backgroundColor: '#3f51b540',
    },
    lowerAppBarToolBar: {
        justifyContent: 'center'
    },
    gridContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#c2c8e647'
    },
    title: {
        color: '#0a0aa0',
        [theme.breakpoints.up('xs')]: {
            textAlign: 'center',
        }
    },
    footerTypography: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    links: {
        color:'#000'
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
        const { values, classes, handleChange, isSubmitting } = this.props;
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
                            isSubmitting={isSubmitting || !values.search}
                        />
                    </Toolbar>
                </AppBar>
                <AppBar position="static" className={classes.lowerAppBar}>
                    <Toolbar className={classes.lowerAppBarToolBar}>
                        <Typography variant="h4" className={classes.title}>
                            <b>OMDb Movie Listings</b>
                        </Typography>
                    </Toolbar>
                </AppBar>
    
                <Grid container className={classes.gridContainer}>
                    <ListDiv
                        singleTitle={submittedValue}
                    />
                </Grid>
                <Footer
                    lowerAppBar={classes.lowerAppBar}
                    lowerAppBarToolBar={classes.lowerAppBarToolBar}
                    footerTypography={classes.footerTypography}
                    links={classes.links}
                    omdbURL={'http://www.omdbapi.com/'}
                    githubURL={'https://github.com/Ajsalemo/OMDB-GraphQL-Apollo'}
                    imdbURL={'https://www.imdb.com/'}
                />
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