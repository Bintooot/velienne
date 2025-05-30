import React from "react";
import "./FilledButton.css";

const FilledButton = (props) => {
  return (
    <>
      <button className="filled-button">
        {props.title}
        {props.icon}
      </button>
    </>
  );
};

export default FilledButton;
