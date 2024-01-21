import React, { Component } from "react";

export function Dummy() {
  function sayHello() {
    alert("You clicked me!");
  }
  return (
    <div>
      <input />
      <button onClick={sayHello}>OK</button>;
    </div>
  );
}
