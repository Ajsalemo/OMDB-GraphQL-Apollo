// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';

// ------------------------------------------------------------------------------------------- //

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://www.omdbapi.com/?apikey=[yourkey]&' }),
  cache: new InMemoryCache()
})

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