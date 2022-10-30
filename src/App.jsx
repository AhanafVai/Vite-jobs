import React from "react";
import CardList from "./Components/CardList";
import Search from "./Components/Search";
import { SearchProvider } from "./Context/SearchContext";

const App = () => {
  return (
    <SearchProvider>
      <div className="header container"></div>
      <Search />
      <CardList />
    </SearchProvider>
  );
};

export default App;

//  <div className="attribution">
//    Challenge by{" "}
//    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
//      Frontend Mentor
//    </a>
//    . Coded by <a href="#">Your Name Here</a>.
//  </div>;
