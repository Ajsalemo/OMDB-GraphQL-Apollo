// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RestLink } from "apollo-link-rest";
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';

// Test
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

require('dotenv').config();

// ------------------------------------------------------------------------------------------- //
const restLink = new RestLink({
    uri: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&`,
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
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
