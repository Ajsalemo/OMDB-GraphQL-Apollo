// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: 'test',
    graphiql: true
}));

app.listen(3000);

