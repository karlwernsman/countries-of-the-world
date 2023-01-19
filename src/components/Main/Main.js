import './Main.css';
import React from 'react';
import { useCountries } from '../../hooks/countries.js';
import Country from '../Country/Country.js';
import Controls from '../Controls/Controls.js';

export default function Main() {
  const { filteredCountries, setContinents, countries } = useCountries();
  return (
    <main>
      <Controls {...{ setContinents, countries }} />
      {filteredCountries.map((country) => (
        <Country key={country.id} {...country} />
      ))}
    </main>
  );
}
