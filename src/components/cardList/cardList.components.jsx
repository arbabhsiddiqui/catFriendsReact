import React from "react";
import Card from "../card/card.components";
import "./cardList.styles.css";
const CardList = ({ cats }) => {
  return (
    <div className="List">
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CardList;
