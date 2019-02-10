// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
require('dotenv').config();

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const app = express();

// Allowing CORS
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 4000;

// ------------------------------------------------------------------------------------------- //

app.listen(PORT, () => console.log(
    `Server is listening on port: ${PORT}`
));

// ------------------------------------------------------------------------------------------- //


