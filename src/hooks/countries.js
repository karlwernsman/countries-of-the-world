import { useEffect } from 'react';
import { useState } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState('all');
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountries();
        setCountries(res);
      } catch (e) {
        setError('Uh oh! Not gonna work.');
      }
    };
    fetchData();
  }, []);

  const filteredCountries = countries.filter(
    (country) => country.continent === continents || continents === 'all'
  );

  return { countries, error, setContinents, filteredCountries };
}
