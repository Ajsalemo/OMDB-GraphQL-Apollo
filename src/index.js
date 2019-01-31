// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import { client } from './apolloclient';

// Test
import gql from "graphql-tag";

require('dotenv').config();

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

client.query({ query }).then(response => {
    console.log(response.data);
});

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root')
);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

serviceWorker.unregister();

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //
