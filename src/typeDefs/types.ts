const typeDefs = `#graphql

type User {
  _id: ID!
  username: String!
  email: String!
}

type Query {
  users: [User]
}

type Mutation {
  addUser(username: String!, email: String!): User
}


`;

export default typeDefs;
