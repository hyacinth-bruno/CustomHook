import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../customHook/useFetch';

const CountryDetails = () => {
  const { name } = useParams();
  const { data: countryDetail, loading, error } = useFetch(`https://restcountries.com/v3.1/name/${name}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  const country = countryDetail && countryDetail[0];

  return (
    <div>
      {country && (
        <>
          <h3>{country.name.common}</h3>
          <img src={country.flags.png} alt={country.name.common} width="150" />
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
          <p>Population: {country.population}</p>
          <p>Capital: {country.capital}</p>
          <p>Languages: {Object.values(country.languages).join(', ')}</p>
        </>
      )}
    </div>
  );
};

export default CountryDetails;
