import React, { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  const handleSelectChange = (e) => {
    setFruit(e.target.value);
    console.log(`${name} selected ${e.target.value}`);
  };

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter name"
      />
      <select id="select-input" onChange={handleSelectChange} value={fruit}>
        <option value="">Select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </div>
  );
};

export default Exercise2;
