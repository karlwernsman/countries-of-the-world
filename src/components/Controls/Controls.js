import './Controls.css';
import React from 'react';

export default function Controls({ setContinents, countries }) {
  const continents = countries.map((country) => country.continent);
  const filteredContinents = [...new Set(continents.map((c) => c))];
  const filterOutNull = filteredContinents.filter((continent) => continent !== null);

  const handleChange = (event) => {
    setContinents(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="all">All</option>
        {filterOutNull.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}
