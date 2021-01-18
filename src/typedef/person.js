const { gql } = require("apollo-server");

/**
 * The type definition for querying with and id to get val3 and val5.
 */
module.exports.typeDefs = gql`
  type Person {
    val3: Int
    val5: Int
  }

  type Query {
    person(id: String!): Person
  }
`;