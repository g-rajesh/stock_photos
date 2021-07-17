const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
     console.log(`Server ready at ${url}`);
});
