// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');
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

const searchQuery = {
    Title: {
        type: GraphQLString,
        description: 'Title of the movie'
    },
    Year: {
        type: GraphQLString,
        description: 'Year of the movie'
    },
    Type: {
        type: GraphQLString,
        description: 'Category'
    },
    Poster: {
        type: GraphQLString,
        description: 'Movie poster'
    }
};

const SearchType = new GraphQLObjectType({
    name: 'Search',
    description: 'Search for an OMDB movie',
    fields: () => (
        searchQuery
    )
});

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
            async resolve(parent, args) {
                const result = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=inception`);
                const { data } = result;
                return data;
            }
        },
        BySearch: {
            type: new GraphQLList(SearchType),
            async resolve(parent, args) {
                const result = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=ghost`);
                const { data } = result;
                return data.Search;
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