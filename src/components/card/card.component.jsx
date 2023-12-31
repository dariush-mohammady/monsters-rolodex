import React from "react";

import './card.styles.css'

export const Card = (props) => {
  const { monster } = props;

  return (
    <React.Fragment>
      <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${monster.id}?set-set2&size=180x180`}/>
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
      </div>
    </React.Fragment>
  );
};
