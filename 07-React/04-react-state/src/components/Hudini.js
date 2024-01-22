import React, { useState } from "react";

const Hudini = () => {
  let [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show</button>
      <br />
      {show ? "Now you see me" : "Now you don’t"}
    </div>
  );
};

export default Hudini;
