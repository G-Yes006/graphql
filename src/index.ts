import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "../src/typeDefs/types";


import resolvers from "./resolvers/resolvers";
import connectDB from "./db";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
  });
});
