import React from "react";
import "./Menucard.css";

const MenuCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <img src={props.image} alt={props.alt} width={200} height={200} />
        <div className="card-details">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <h4>
            $ <span>{props.price}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
