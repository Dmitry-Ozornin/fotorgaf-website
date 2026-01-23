import { useState } from "react";
import { Link } from "react-router";
import questionPhoto from "../../css/homeCss/IMG_7857.jpg";
import ArrowDown from "./arrow-down.svg";
import ArrowUp from "./up-arrow.svg";

function QuestionsHome() {
  const [question1, setQuestion1] = useState("close");
  const [question2, setQuestion2] = useState("close");
  const [question3, setQuestion3] = useState("close");
  const [question4, setQuestion4] = useState("close");
  const [question1Arrow, setQuestion1Arrow] = useState([ArrowDown, "открыть ответ"]);
  const [question2Arrow, setQuestion2Arrow] = useState([ArrowDown, "открыть ответ"]);
  const [question3Arrow, setQuestion3Arrow] = useState([ArrowDown, "открыть ответ"]);
  const [question4Arrow, setQuestion4Arrow] = useState([ArrowDown, "открыть ответ"]);
  const openQestion = (id) => {
    if (id === "q1") {
      if (question1 === "close") {
        setQuestion1("open");
        setQuestion1Arrow([ArrowUp, "закрыть ответ"]);
      } else {
        setQuestion1("close");
        setQuestion1Arrow([ArrowDown, "открыть ответ"]);
      }
    } else if (id === "q2") {
      if (question2 === "close") {
        setQuestion2("open");
        setQuestion2Arrow([ArrowUp, "закрыть ответ"]);
      } else {
        setQuestion2("close");
        setQuestion2Arrow([ArrowDown, "открыть ответ"]);
      }
    } else if (id === "q3") {
      if (question3 === "close") {
        setQuestion3("open");
        setQuestion3Arrow([ArrowUp, "закрыть ответ"]);
      } else {
        setQuestion3("close");
        setQuestion3Arrow([ArrowDown, "открыть ответ"]);
      }
    } else if (id === "q4") {
      if (question4 === "close") {
        setQuestion4("open");
        setQuestion4Arrow([ArrowUp, "закрыть ответ"]);
      } else {
        setQuestion4("close");
        setQuestion4Arrow([ArrowDown, "открыть ответ"]);
      }
    }
  };

  return (
    <section className="questions center">
      <img className="questions__photo" src={questionPhoto} alt="photos of swans on the lake" />
      <article className="questions__box">
        <article className="questions__box_question">
          <button className="questions__box_question_button arrowPlace1" onClick={(e) => openQestion(e.target.id)} id="q1">
            Как забронировать дату и время? <img src={question1Arrow[0]} onClick={(e) => openQestion(e.target.parentNode.id)} style={{ width: "20px" }} alt={question1Arrow[1]} />
          </button>
          <p className={`${question1} questions__box_question_text`}>
            Для того, чтобы забронировать дату фотосессии, свяжитесь со мной любым удобным для вас способом:{" "}
            <Link to={"/contacts"} className="questions__box_question_text_link">
              Контакты
            </Link>
          </p>
        </article>
        <article className="questions__box_question">
          <button className="questions__box_question_button arrowPlace2" onClick={(e) => openQestion(e.target.id)} id="q2">
            Сколько фотографий получится?
            <img src={question2Arrow[0]} onClick={(e) => openQestion(e.target.parentNode.id)} style={{ width: "20px" }} alt={question2Arrow[1]} />
          </button>
          <p className={`${question2} questions__box_question_text`}>Количество фотографий варьируется от выбранного типа съемки — от 10 до 300+. Но я всегда делаю больше заявленного количества.</p>
        </article>
        <article className="questions__box_question">
          <button className="questions__box_question_button arrowPlace3" onClick={(e) => openQestion(e.target.id)} id="q3">
            Вы обрабатываете фото? <img src={question3Arrow[0]} onClick={(e) => openQestion(e.target.parentNode.id)} style={{ width: "20px" }} alt={question3Arrow[1]} />
          </button>
          <p className={`${question3} questions__box_question_text`}>Да, я всегда выполняю ретушь и цветокоррекцию фотографий, чтобы подчеркнуть их красоту и атмосферу события.</p>
        </article>
        <article className="questions__box_question">
          <button className="questions__box_question_button arrowPlace4" onClick={(e) => openQestion(e.target.id)} id="q4">
            Как проходит процесс съемки? <img src={question4Arrow[0]} onClick={(e) => openQestion(e.target.parentNode.id)} style={{ width: "20px" }} alt={question4Arrow[1]} />
          </button>
          <p className={`${question4} questions__box_question_text`}>
            Съемка — это процесс, в котором на каждом этапе должно быть легко и комфортно. Подготовка начинается с обсуждения вашей задумки. Не переживайте, если идете на съемку впервые. Я всегда помогаю с локацией или маршрутом для прогулки и с образом, подходящим под идею. Во время фотосессии я
            стараюсь запечатлеть Вас настоящих, в моменте, поймать эмоции и чувства, но также в любой момент готова помочь с позированием. По любым вопросам — обращайтесь и мы вместе подберем лучший вариант для вас!
          </p>
        </article>
      </article>
    </section>
  );
}

export default QuestionsHome;
