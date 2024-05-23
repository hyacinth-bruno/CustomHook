// import React from "react";

// export default function Country() {
//   return <div>Country</div>;
// }


import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../customHook/useFetch';

const Country = () => {
  const { data, loading, error } = useFetch('https://restcountries.com/v3.1/all');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  // Display only 3 countries for brevity
  const countriesToShow = data.slice(0, 3);

  return (
    <div>
      <h2>Country List</h2>
      {countriesToShow.map((country, index) => (
        <div key={index}>
          <h3>Name: {country.name.common}</h3>
          <p>Status: {country.status || 'Unknown'}</p>
          <p>Region: {country.region}</p>
          <Link to={`/countries/${country.name.common}`}><button>More Details</button></Link>
        </div>
      ))}
    </div>
  );
};

export default Country;
