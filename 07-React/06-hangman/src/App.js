import "./App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import { useState } from "react";

function App() {
  let [score, setScore] = useState(0);
  let [solution, setSolution] = useState(new Set([]));

  const HINT = "Number 10 in FB";
  const SEARCHEN_WORD = "CR";

  const handleLetterClick = (letter) => {
    const clonedSet = new Set(solution);
    if (SEARCHEN_WORD.includes(letter)) {
      clonedSet.add(letter);
      setSolution(clonedSet);
      let newScore = 100 / SEARCHEN_WORD.length;
      setScore(score + newScore);
    }
  };
  return (
    <div>
      <Score score={score} />
      <Solution solution={solution} SEARCHEN_WORD={SEARCHEN_WORD} />
      <p>{HINT}</p>
      <Letters solution={solution} onClickEvent={handleLetterClick} />
    </div>
  );
}

export default App;
