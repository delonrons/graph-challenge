const { ApolloServer } = require('apollo-server');
const { resolvers } = require('./resolver/person')
const { typeDefs } = require('./typedef/person')

const mockServer = require('./mock/index');

// Starting the mock json-server. Some times killing the process takes some time.
mockServer.listen(3000, () => {
  console.log('JSON Server is running');
});


// Starting the apollo-server.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: false
});

server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}`));