//Меняющийся фон
import { useEffect, useState } from "react";
import imgSlide from "./ChangingBanerData";
import "./baner.css";
function ChangingBaner() {
  const [currentState, setCurrentState] = useState(0);
  const [animation, setAnimation] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === imgSlide.length - 1) {
        setAnimation({ animation: "show 3s" });
        setCurrentState(0);
      } else {
        setAnimation({ animation: "show 3s" });
        setCurrentState(currentState + 1);
      }
    }, [5000]);

    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    url: `${imgSlide[currentState].url}`,
  };

  return (
    <>
      <img className="baner" src={bgImageStyle.url} />
    </>
  );
}

export default ChangingBaner;
