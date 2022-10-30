import React, { useContext } from "react";
import SearchContext from "../Context/SearchContext";

const Search = () => {
  const { selected } = useContext(SearchContext);
  return (
    <div className="search">
      <div className="search__bar">
        <div className="search__categories">
          <p className="search__category"> Sample </p>
          <p className="search__category search__category-close"> X </p>
        </div>
        <div className="search__categories">
          <p className="search__category"> {selected} </p>
          <p className="search__category search__category-close"> X </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
