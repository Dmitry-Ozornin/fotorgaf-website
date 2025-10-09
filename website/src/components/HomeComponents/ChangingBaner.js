//Меняющийся фон
import { useEffect, useState } from "react";
import imgSlide from "./ChangingBanerData";
import "./baner.css";
function ChangingBaner() {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, [5000]);
    return ()=> clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `${imgSlide[currentState].url}`,
  };

  const goToNext = () => {
    setCurrentState(currentState);
  };
  console.log(bgImageStyle.backgroundImage);

  return (
    <>
      <img className="baner" src={bgImageStyle.backgroundImage} />
      {imgSlide.map((imageSlide, currentState) => (
        <span key={currentState} onClick={() => goToNext(currentState)}></span>
      ))}
    </>
  );
}

export default ChangingBaner;
