import React, { useContext } from "react";
import SearchContext from "../Context/SearchContext";
import Card from "./Card";

const CardList = () => {
  const { item } = useContext(SearchContext);
  return (
    <>
      <div style={{ marginTop: "100px", marginBottom: "30px" }}>
        {item.map((info) => (
          <Card info={info} />
        ))}
      </div>
    </>
  );
};

export default CardList;
