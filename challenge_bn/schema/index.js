import { gql } from "apollo-server-express";

const Schema = gql`
  type Nation {
    id: ID
    country: String
    year: String
    area: String
    totalPopulation: String
  }

  type Query {
    hello: String
    getAll: [Nation]
  }
  input NationInput {
    country: String
    year: String
    area: String
    totalPopulation: String
  }
  type Mutation {
    createNation(nation: NationInput): Nation
    updateNation(id: String, nation: NationInput): Nation
    deleteNation(id: String): String
  }
`;


export default Schema;
