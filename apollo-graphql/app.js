const { ApolloServer } = require('apollo-server');
const mySchema = require('./graphQLSchema');
 
const server = new ApolloServer({
    typeDefs: mySchema.typeDefs,
    resolvers: mySchema.resolvers
});

server.listen(5000, ()=>{
    console.log('Listening to port 5000');
});


