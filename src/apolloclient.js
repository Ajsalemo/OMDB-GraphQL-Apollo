// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import { RestLink } from "apollo-link-rest";
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const restLink = new RestLink({
    uri: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&`,
});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache({
    addTypename: false
  })
});

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //