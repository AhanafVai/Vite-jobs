import React, { useContext } from "react";
import SearchContext from "../Context/SearchContext";
import Card from "./Card";

const CardList = () => {
  const { item } = useContext(SearchContext);
  return (
    <>
      {item.map((info) => (
        <div key={info.id} style={{ marginTop: "57px", marginBottom: "30px" }}>
          <Card info={info} />
        </div>
      ))}
    </>
  );
};

export default CardList;
