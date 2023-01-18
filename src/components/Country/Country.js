import './Country.css';
import React from 'react';

export default function Country(country) {
  return (
    <div className="countryCard">
      <h2>{country.name}</h2>
      <h4>{country.local_name}</h4>
      <img />
    </div>
  );
}
