// Test and placeholder component to log data
// Leaving this here until I can start building out a UI

// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const dynamicSearch = 'inception';

const query = gql`
    query titleQuery {
        TitleSearch @rest(type: "Title", path: "t=${dynamicSearch}") {
            Title
            Rated
            Released
            Runtime
        }
    }
`;

const listDiv = () => {
    return (
        <Query query={query}>
            {({ data, loading }) => {
                if (loading) {
                    return <div>loading...</div>;
                }
                // Looping over key/value pairs
                return Object.entries(data.TitleSearch).map((entry, i) => {
                    return (
                        <div key={i}>
                            <li>{entry[0]}: {entry[1]}</li>
                        </div>
                    )
                });
            }}
        </Query>
    )
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default listDiv;

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //