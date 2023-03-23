import React, { useState } from 'react';
import '../index.css';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <header className='header'>
    <form onSubmit={handleSubmit}>
      <label>
        Search
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </header>
  );
};

export default SearchBar;