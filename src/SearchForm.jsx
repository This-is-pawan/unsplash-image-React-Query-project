import React from 'react';

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value.trim(); // Ensure we access 'search' correctly
    if (!searchValue) return;
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
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
