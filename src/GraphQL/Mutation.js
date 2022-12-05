import { gql } from "@apollo/client";
export const CREATE_Nation = gql`
  mutation CreateNation( $country: String, $year: String, $area: String, $totalPopulation: String) {
    createNation(nation: {country: $country, year: $year, area: $area, totalPopulation: $totalPopulation }) {
      id
      country
      year
      area
      totalPopulation
    }
  }
`;

export const DELETE_Nation = gql`
  mutation deleteNation($id: String) {
    deleteNation(id: $id)
  }
`;
