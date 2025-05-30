import React from "react";
import "./OutlinedButton.css";

const OutlinedButton = (props) => {
  return (
    <>
      <button className="Outlined-button">
        {props.title}
        {props.icon}
      </button>
    </>
  );
};

export default OutlinedButton;
