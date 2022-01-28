import React from 'react';

const Search = ({ callbackSearch }) => {
  return (
    <input class="input is-rounded"
      text="test"
      placeholder="Search your dish"
  
      onChange={(e) => callbackSearch(e.target.value)}
    />
  );
};

export default Search;
