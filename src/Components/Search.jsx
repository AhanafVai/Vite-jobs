import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search__bar">
        <div className="search__categories">
          <span className="search__category">sample</span>
          <span
            className="search__category search__category-close"
            type="button"
          >
            X
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
