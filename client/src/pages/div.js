// Test and placeholder component to log data
// Leaving this here until I can start building out a UI

// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import { RETRIEVE_TITLE } from '../apolloclient/queries';
import { Query } from "react-apollo";

// ------------------------------------------------------------------------------------------- //

const ListDiv = ({ singleTitle }) => {
    return (
        <React.Fragment>
            <Query query={RETRIEVE_TITLE} variables={{ singleTitle: singleTitle }} fetchPolicy='cache-and-network'>	        
                {({ loading, error, data }) => {	           
                    if (loading) {	                
                        return <div>loading...</div>;	                  
                    }
                    if(error) console.log(error);
                    // Looping over key/value pairs	             
                    return Object.entries(data.ByTitle).map((entry, i) => {	                
                        return (	                
                            <div key={i}>	           
                                <li>{entry[0]}: {entry[1]}</li>	        
                            </div>	
                        )	
                    });	
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