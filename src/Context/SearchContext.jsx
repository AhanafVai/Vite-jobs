import { createContext, useEffect, useState } from "react";
import Data from "../Data/data";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [item, setItem] = useState(Data);
  const [filterKeywords, setFilterKeywords] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // add search item
  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  // delete search item
  const deleteFilterKeywords = (data) => {
    const searchKeywords = filterKeywords.filter((keyword) => keyword !== data);
    setFilterKeywords(searchKeywords);
  };
  // delete all search item
  const clearAll = () => {
    setFilterKeywords([]);
  };

  useEffect(() => {
    modifiedData();
  }, [filterKeywords]);

  // filter job
  const modifiedData = () => {
    if (filterKeywords) {
      const newData = item.filter((d) => {
        return filterKeywords.every((key) => {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setFilteredData(newData);
    } else {
      setFilteredData(item);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        item,
        filteredData,
        addFilterKeywords,
        deleteFilterKeywords,
        clearAll,
        filterKeywords,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
