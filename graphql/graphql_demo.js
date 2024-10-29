const express = require('express');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/http');
const { ruruHTML } = require('ruru/server');

const mySchema = buildSchema(`
    type Query{
        hello : String
    }
`)

const root = {
    hello: () => {
        return 'Hello World Response'
    }
}

const app = express();
app.use(cors());
app.all('/graphql', createHandler({ schema: mySchema, rootValue: root }));

app.get('/', (req, res) => {
    res.type('html');
    res.end(ruruHTML({endpoint:'/graphql'}));
});

app.listen(5000, () => {
    console.log('Listening to port 5000');
});