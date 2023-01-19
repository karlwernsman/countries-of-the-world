import './Controls.css';
import React from 'react';
import { useCountries } from '../../hooks/countries.js';

export default function Controls() {
  const { countries } = useCountries();
  const continents = countries.map((country) => country.continent);
  console.log('CONTINENTS', continents);
  const filteredContinents = [...new Set(continents.map((c) => c))];
  console.log('COUNTRIES', filteredContinents);
  const filteredOutNull = filteredContinents.filter((continent) => continent !== null);
  console.log('HOWDY', filteredOutNull);
  return (
    <div>
      <select>
        {filteredOutNull.map((continent) => (
          <option key={continent}>{continent}</option>
        ))}
      </select>
    </div>
  );
}
