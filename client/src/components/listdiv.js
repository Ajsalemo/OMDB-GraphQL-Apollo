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

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const ListDiv = ({ singleTitle }) => {
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
                    <Error
                        singleTitle={singleTitle}
                    />
                        : 
                    data.BySearch.map((titles, i) => {
                        return (
                            <Grid item style={{ margin: '3em 1em' }} key={i}>
                                <ImageCard 
                                    key={i}
                                    title={titles.Title}
                                    poster={titles.Poster}
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

export default ListDiv;

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //