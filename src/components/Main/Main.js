import './Main.css';
import React from 'react';
import { useCountries } from '../../hooks/countries.js';
import Country from '../Country/Country.js';

export default function Main() {
  const { countries } = useCountries();
  return (
    <main>
      {countries.map((country) => (
        <Country key={country.id} {...country} />
      ))}
    </main>
  );
}
