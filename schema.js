// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');
const axios = require('axios');

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
            args: {
                Title: {
                    type: GraphQLString
                }
            },
            async resolve(parent, args) {
                const result = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=${args.Title}`);
                const { data } = result;
                return data;
            }
        }
    })
});

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

module.exports = new GraphQLSchema({
    query: RootQuery
});

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //