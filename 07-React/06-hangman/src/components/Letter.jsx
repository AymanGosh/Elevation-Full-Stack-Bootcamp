import React from "react";

function Letter({ Letter, className = "enable", onClickEvent }) {
  const handelClick = () => {
    if (onClickEvent) {
      onClickEvent(Letter);
    }
  };

  return (
    <span onClick={handelClick} className={className}>
      {Letter}
    </span>
  );
}

export default Letter;
