import { createContext, useState } from "react";
import Data from "../Data/data";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [item, setItem] = useState(Data);
  const [selected, setSelected] = useState("");

  // ? Filters
  const filterRole = (role) => {
    setItem(item.filter((item) => item.role === role));
    setSelected(role);
  };

  return (
    <SearchContext.Provider
      value={{
        item,
        filterRole,

        selected,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
