import React from 'react';

const Form = ({ city, setCity, countryCode, setCountryCode, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter country code (ISO)"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
      />
      <button type="submit">Get Forecast</button>
    </form>
  );
};

export default Form;
