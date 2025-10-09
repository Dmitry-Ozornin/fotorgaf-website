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
    url: `${imgSlide[currentState].url}`,
  };


  console.log(bgImageStyle.url);

  return (
    <>
      <img className="baner" src={bgImageStyle.url} />

    </>
  );
}

export default ChangingBaner;
