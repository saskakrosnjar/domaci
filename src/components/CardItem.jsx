import React from "react";
import { Link } from "react-router-dom";

function CardItem({ destination }) {
  return (
    <div>
      <li className="cards__item">
        <Link className="cards__item__link" to="/services">
          <figure
            className="cards__item__pic-wrap"
            data-category={destination.lable}
          >
            <img
              src={destination.image}
              alt="Travel image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{destination.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;
