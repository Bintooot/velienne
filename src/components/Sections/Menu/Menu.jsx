import React, { useState } from "react";
import "./Menu.css";
import MenuCard from "../../../components/MenuCard/MenuCard";
import { dishData } from "../../../utils/MenuData.js";

const Menu = (props) => {
  const [data] = useState(dishData);
  return (
    <section className="menu-wrapper" id={props.id}>
      <div className="menu-header">
        <h2>
          Our Restaurant’s <span>Menus</span>
        </h2>
        <p>View all</p>
      </div>
      <div className="menu-content">
        <div className="menu-items">
          {data.map((dish, index) => (
            <MenuCard
              key={index}
              image={dish.image}
              alt={dish.alt}
              title={dish.title}
              description={dish.description}
              price={dish.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
