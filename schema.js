// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import { get } from 'axios';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const movieQuery = {
    Title: {
        type: GraphQLString,
        description: 'Title of the movie'
    },
    Year: {
        type: GraphQLString,
        description: 'Year of the movie'
    },
    Released: {
        type: GraphQLString,
        description: 'Release date'
    },
    Runtime: {
        type: GraphQLString,
        description: 'Movie runtime'
    },
    Plot: {
        type: GraphQLString,
        description: 'Plot description'
    }
};

const TitleType = new GraphQLObjectType({
    name: 'Title',
    description: 'Title of the OMDB movie',
    fields: () => (
        movieQuery
    )
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Query',
    fields: () => ({
        ByTitle: {
            type: TitleType,
            resolve(parent, args) {
                return get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=inception`)
                    .then(res => {
                        return res.data
                    });
            }
        }
    })
});

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default new GraphQLSchema({
    query: RootQuery
});

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //