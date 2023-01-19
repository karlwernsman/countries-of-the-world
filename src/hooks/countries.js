import { useEffect } from 'react';
import { useState } from 'react';
import { getCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
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

  return { countries, error, setCountries };
}
