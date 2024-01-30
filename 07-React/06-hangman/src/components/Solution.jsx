import React from "react";
import Letter from "./Letter";
function Solution({ solution, SEARCHEN_WORD }) {
  const searchenWord = [...SEARCHEN_WORD];
  return (
    <>
      {searchenWord.map((l, index) => {
        return <Letter key={index} Letter={solution.has(l) ? l + " " : "_ "} />;
      })}
    </>
  );
}

export default Solution;
