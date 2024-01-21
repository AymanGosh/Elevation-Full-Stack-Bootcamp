import Spam from "./Spam";
import React, { Component } from "react";

const Spamalot = () => {
  const showSpam = (times) => {
    let spamArr = [];
    for (let i = 0; i < times; i++) {
      spamArr.push(<Spam />);
    }
    return spamArr;
  };
  return <div>{showSpam(50)}</div>;
};

export default Spamalot;
