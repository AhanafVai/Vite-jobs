import React from "react";
import Card from "./Components/Card";
import Search from "./Components/Search";
import data from "./Data/data";

const App = () => {
  return (
    <>
      <div className="header container"></div>
      <Search />
      {data.map((info) => (
        <div key={info.id} style={{ marginTop: "57px", marginBottom: "30px" }}>
          <Card info={info} />
        </div>
      ))}
    </>
  );
};

export default App;

//  <div class="attribution">
//    Challenge by{" "}
//    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
//      Frontend Mentor
//    </a>
//    . Coded by <a href="#">Your Name Here</a>.
//  </div>;
