// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import { RETRIEVE_SEARCH } from '../apolloclient/queries';
import { Query } from "react-apollo";

// Components
import ImageCard from './imagecard';

// Material-UI components
import CircularProgress from '@material-ui/core/CircularProgress';

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
                    
                    console.log(data)
                    return data.BySearch.map((titles, i) => {
                        return (
                            <ImageCard 
                                key={i}
                                title={titles.Title}
                                poster={titles.Poster}
                                year={titles.Year}
                            />
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