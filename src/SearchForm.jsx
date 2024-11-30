import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const {setSearchTheme}=useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTheme(searchValue)
    console.log(searchValue);
  };

  return (
    <section className="main">
      <h1 className="title">Unsplash Images</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search"
          name="search"
          placeholder="dog"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
