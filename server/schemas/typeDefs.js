const { gql } = require('apollo-server-express');

/* literally defining every piece of data that the client can expect to work with through a query or mutation. 
Every GraphQL API starts with defining this data, as this type of strict type definition will give the client more clarity
 as to what they are asking for and what they can expect in return.
 Think of this as not only defining the API endpoint, but also defining the exact data and parameters that are tied to that endpoint. */
const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input BookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(BookId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
