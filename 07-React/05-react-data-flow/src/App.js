import logo from "./logo.svg";
import "./App.css";
import { MoveButton } from "./components/MoveButton";
import { ShowImage } from "./components/ShowImage";
import { useState } from "react";
function App() {
  let [currentImg, setCurrentImg] = useState(0);
  const imgs = [
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
  ];
  const handleBackClick = () => {
    if (!isInLimits(currentImg - 1, imgs.length)) {
      return;
    }
    let imageIndex = currentImg - 1;
    setCurrentImg(imageIndex);
  };

  const handleNextClick = () => {
    if (!isInLimits(currentImg + 1, imgs.length)) {
      return;
    }
    let imageIndex = currentImg + 1;
    setCurrentImg(imageIndex);
  };
  const isInLimits = (index, length) => 0 <= index && index < length;

  return (
    <div className="q1">
      <MoveButton text="Back" onClickEvent={handleBackClick} />
      <ShowImage src={imgs[currentImg]} />
      <MoveButton text="Next" onClickEvent={handleNextClick} />
    </div>
  );
}

export default App;
