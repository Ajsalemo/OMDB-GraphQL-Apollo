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
        Title @rest(type: "Title", path: "t=${dynamicSearch}") {
            Title
            Rated
            Released
            Runtime
        }
    }
`;

const listDiv = () => {
    let movieArray = [];
    return (
        <Query query={query}>
            {({ data, loading }) => {
                if (loading) {
                    return <div>loading...</div>;
                }
                return Object.keys(data.Title).map((movies, i) => {
                    return (
                        <div key={i}>
                            {movies}
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