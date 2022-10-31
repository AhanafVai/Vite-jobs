import { createContext, useState } from "react";
import Data from "../Data/data";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [item, setItem] = useState(Data);
  const [filterKeywords, setFilterKeywords] = useState([]);

  // add search item
  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  // delete item
  const deleteFilterKeywords = (data) => {
    const searchKeywords = filterKeywords.filter((keyword) => keyword !== data);
    setFilterKeywords(searchKeywords);
  };

  return (
    <SearchContext.Provider
      value={{
        item,
        addFilterKeywords,
        deleteFilterKeywords,
        filterKeywords,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
