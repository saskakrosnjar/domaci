import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import destinations from "./DestinationsData";

function Cards() {
  return (
    <div className="cards">
      <h1>Naše ovogodišnje destinacije!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {destinations.map((item) => (
              <CardItem destination={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
