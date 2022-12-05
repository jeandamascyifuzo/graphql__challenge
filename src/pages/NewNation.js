import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_Nation } from "../GraphQL/Mutation";

const NewNation = () => {
  const [createNation, { err }] = useMutation(CREATE_Nation);
  const [country, setCountry] = useState();
  const [year, setYear] = useState();
  const [area, setArea] = useState();
  const [totalPopulation, setTotalPopulation] = useState();
  console.log(country, year, area, totalPopulation);

  const createNations = (e) => {
    e.preventDefault();
    createNation({
      variables: {
        country: country,
        year: year,
        area: area,
        totalPopulation: totalPopulation,
      },
    });
  };
  return (
    <form className="form">
      <div className="control">
        <label htmlFor="country">Coutry</label>
        <input
          type="text"
          id="country"
          required
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="control">
        <label htmlFor="population">Total Population</label>
        <input
          type="text"
          id="population"
          required
          onChange={(e) => setTotalPopulation(e.target.value)}
        />
      </div>
      <div className="control">
        <label htmlFor="area">Total Area</label>
        <input
          type="text"
          id="area"
          required
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div className="control">
        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          required
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div className="actions">
        <button onClick={createNations}>Add Nation</button>
      </div>
    </form>
  );
};

export default NewNation;
