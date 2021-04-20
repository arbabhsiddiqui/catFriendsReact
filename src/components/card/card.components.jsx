import React from "react";
import "./card.styles.css";
const Card = ({ cat: { name, email } }) => {
  return (
    <div className="card mw5 center bg-washed-blue br3 pa3 pa4-ns mv3 ba b--black-10 tc grow shadow-3 h-10">
      <img
        src={`https://robohash.org/${name}?set=set4&200*200`}
        className="br-100 h4 center w4 dib ba b--black-05 pa2"
        alt=""
      />
      <div className="text">
        <h3 className="f5 mb2">{name}</h3>
        <p className="text-small">{email}</p>
      </div>
    </div>
  );
};

export default Card;
