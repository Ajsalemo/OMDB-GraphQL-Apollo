// Test and placeholder component to log data
// Leaving this here until I can start building out a UI

// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import { retrieveTitle } from '../apolloclient/queries';
import { Query } from "react-apollo";

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const listDiv = () => {
    return (
        <React.Fragment>
            <Query query={retrieveTitle}>	        
                {({ data, loading }) => {	           
                    if (loading) {	                
                        return <div>loading...</div>;	                  
                    }	                
                    // Looping over key/value pairs	             
                    // return Object.entries(data.TitleSearch).map((entry, i) => {	                
                    //     return (	                
                    //         <div key={i}>	           
                    //             <li>{entry[0]}: {entry[1]}</li>	        
                    //         </div>	
                    //     )	
                    // });	
                    console.log(data)
                    return null;
                }}	
            </Query>
            <div>test</div>
        </React.Fragment>
    )
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default listDiv;

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //