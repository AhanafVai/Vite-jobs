import React, { useContext } from "react";
import SearchContext from "../Context/SearchContext";
import Card from "./Card";

const CardList = () => {
  const { filteredData } = useContext(SearchContext);
  return (
    <>
      {filteredData.map((info) => (
        <div key={info.id} style={{ marginTop: "100px", marginBottom: "30px" }}>
          <Card info={info} />
        </div>
      ))}
    </>
  );
};

export default CardList;
