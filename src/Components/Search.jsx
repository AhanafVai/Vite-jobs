import React, { useContext } from "react";
import SearchContext from "../Context/SearchContext";

const Search = () => {
  const { filterKeywords, deleteFilterKeywords } = useContext(SearchContext);
  return (
    <div className="search">
      <div className="search__bar">
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
      </div>
    </div>
  );
};

export default Search;
