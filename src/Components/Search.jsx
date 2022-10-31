import React, { useContext } from "react";
import SearchContext from "../Context/SearchContext";

const Search = () => {
  const { filterKeywords, deleteFilterKeywords, clearAll } =
    useContext(SearchContext);
  return (
    <div className="search">
      <ul className="search__bar">
        {filterKeywords.map((keyword, i) => (
          <li key={i} className="search__category">
            {keyword}
            <button
              className="close"
              onClick={() => deleteFilterKeywords(keyword)}
            >
              X
            </button>
          </li>
        ))}
        {filterKeywords.length > 0 && <span onClick={clearAll}>Clear</span>}
      </ul>
    </div>
  );
};

export default Search;
