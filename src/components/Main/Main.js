import './Main.css';
import React from 'react';
import { useCountries } from '../../hooks/countries.js';
import Country from '../Country/Country.js';
import Controls from '../Controls/Controls.js';

export default function Main() {
  const { countries } = useCountries();
  return (
    <main>
      <Controls />
      {countries.map((country) => (
        <Country key={country.id} {...country} />
      ))}
    </main>
  );
}
