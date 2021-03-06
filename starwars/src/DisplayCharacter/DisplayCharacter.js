import React from "react";

const DisplayCharacter = props => {
  return (
    <li className="Item">
      <div className="Item_title">{props.title}:</div>
      <div>{props.data}</div>
    </li>
  );
};

export default DisplayCharacter;