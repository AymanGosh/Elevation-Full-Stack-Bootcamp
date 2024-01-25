import React from "react";

export const MoveButton = ({ text, onClickEvent }) => {
  return <button onClick={onClickEvent}>{text}</button>;
};
