// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import { RETRIEVE_SEARCH } from '../apolloclient/queries';
import { Query } from "react-apollo";

// Components
import ImageCard from './imagecard';
import Error from './error';

// Material-UI components
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Images
import imagenotfound from '../images/imagenotfound.png';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = () => ({
    errorContainer: {
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const ListDiv = props => {
    const { singleTitle, classes } = props;
    return (
        <React.Fragment>
            <Query query={RETRIEVE_SEARCH} variables={{ singleTitle: singleTitle ? singleTitle : 'star wars' }} fetchPolicy='network-only'>	        
                {({ loading, error, data }) => {	           
                    if (loading) {	                
                        return <div><CircularProgress /></div>;	                  
                    }
                    if(error) console.log(error);
                    
                    return data.BySearch === null 
                        ? 
                    <Grid container className={classes.errorContainer}>
                        <Error
                            singleTitle={singleTitle}
                        />
                    </Grid>
                        : 
                    data.BySearch.map((titles, i) => {
                        return (
                            <Grid item style={{ margin: '3em 1em' }} key={i}>
                                <ImageCard 
                                    key={i}
                                    title={titles.Title}
                                    poster={titles.Poster === 'N/A' ? imagenotfound : titles.Poster}
                                    year={titles.Year}
                                />
                            </Grid>
                        )
                    })
                }}	
            </Query>
        </React.Fragment>
    )
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default withStyles(styles)(ListDiv);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //