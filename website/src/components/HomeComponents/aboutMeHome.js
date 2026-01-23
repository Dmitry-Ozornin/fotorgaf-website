import photograferPhoto from "../../css/homeCss/IMG_7513.jpg";
import { Link } from "react-router";
function AboutMeHome() {
  return (
    <section className="aboutMe center">
      <section className="aboutMe__box">
        <article className="aboutMe__box_text">
          <h1>Привет</h1>
          <p>
            Меня зовут Диана! Я рада приветствовать Вас на моем сайте.
            <br /> <br />Я фотограф с опытом работы более 10 лет. За это время я успела поснимать в совершенно разных жанрах, организовывала крупные съемки, стилизовала образы клиентов и фотографировала большое количество людей с совершенно разным опытом.
            <br /> <br /> Для меня фотография — это о Вас! <br /> <br /> О настоящих эмоциях и сильных чувствах, о разном настроении и самочувствии, о стиле и простоте. <br /> <br /> Позвольте стать Вашим проводником в мир фотографии и сделать прекрасные кадры, которые захочется пересматривать!
          </p>
          <Link className="aboutMe__box_toPrice" to={"/price"}>
            К прайсу
          </Link>
        </article>
        <img className="aboutMe__box_photo" src={photograferPhoto} alt="Фотография фотографа" />
      </section>
      <p className="aboutMe__inspiration">В работе я вдохновляюсь своими клиентами, ведь в каждом вижу уникальную личность и красоту, которую и стараюсь передать через свои снимки.</p>
      <h2 className="aboutMe__inspiration">На моих фото — Вы настоящие!</h2>
      <p className="aboutMe__inspiration">Я и сама очень трепетно отношусь к фотографиям, стараясь запечатлеть множество моментов своей жизни. Поэтому понимаю, как важно создать для вас те самые воспоминания в картинках.</p>
    </section>
  );
}

export default AboutMeHome;
