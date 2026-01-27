import { Link } from "react-router";
import Header from "../components/header/Header";
import ChangingBaner from "../components/HomeComponents/ChangingBaner";
import "../css/priceCss/priceCss.css";
import Footer from "../components/footerComponets/footer";

function Price() {
  return (
    <>
      <Header />
      <ChangingBaner />
      <section className="price center">
        <h1 className="price__title">Стоимость фотосъемки и условия работы</h1>
        <p className="price__about">Здесь Вы найдете информацию о стоимости разных видов съемок, а также узнаете про свадебные пакеты услуг.</p>
        <p className="price__about">Важно! Перед бронированием прошу внимательно ознакомиться с условиями работы ниже.</p>
        <section className="price__conditions">
          <h2 className="price__conditions__title">Условия работы</h2>
          <ul className="price__conditions__workingСonditions">
            <li className="price__conditions__workingСonditions_text">
              Приходя ко мне на съемку, Вы соглашаетесь с моим видением кадра, съемкой и обработкой, ознакомиться с которыми можно в моих социальных сетях или на сайте в разделе
              <Link className="price__conditions__workingСonditions_text_link" to={"/portfolio"}>
                «Портфолио».
              </Link>
            </li>
            <li className="price__conditions__workingСonditions_text">
              Любые фотографии, сделанные мной, могут быть размещены в социальных сетях и на моих рабочих страницах. Если Вы хотите, чтобы съемка осталась конфиденциальной, то необходимо предупредить меня об этом <span className="price__conditions__workingСonditions_text_fat">ДО</span> съемки.
            </li>
            <li className="price__conditions__workingСonditions_text">
              Для того, чтобы забронировать дату и время съемки, вносится предоплата в размере 1000 р. для всех съемок, <span className="price__conditions__workingСonditions_text_fat">кроме</span> свадебных (предоплата для свадебных съемок оговаривается отдельно).
            </li>
            <li className="price__conditions__workingСonditions_text">
              При возникновении непредвиденных обстоятельств, таких как, болезнь, съемку можно перенести с сохранением задатка, предупредив меня об этом заранее. При отмене съемки или несвоевременном предупреждении о переносе, предоплата{" "}
              <span className="price__conditions__workingСonditions_text_fat">НЕ</span> возвращается.{" "}
            </li>
            <li className="price__conditions__workingСonditions_text">
              При отмене съемки как минимум <span className="price__conditions__workingСonditions_text_fat">за 3 дня</span> до даты съемки, предоплата возвращается в полном размере.
            </li>
            <li className="price__conditions__workingСonditions_text">Фотостудия, услуги визажиста, стилиста, билеты в парки/музеи оплачиваются отдельно (билеты приобретаются также и на фотографа). </li>
            <li className="price__conditions__workingСonditions_text">Время вашего опоздания и время передвижения между локациями входит в продолжительность съемки.</li>
            <li className="price__conditions__workingСonditions_text">Если съемка планируется за пределами Санкт-Петербурга, то дорога до места проведения съемки и обратно на такси оплачивается отдельно. </li>
          </ul>
        </section>
      </section>
      <section className="price__theOrderOfWork">
        <article className="price__theOrderOfWork__box">
          <h3 className="price__theOrderOfWork__box__title">Консультация</h3>
          <p className="price__theOrderOfWork__box__shooterCost">Я помогу вам подобрать подходящий вам пакет для съемки, расскажу про образы и помогу подготовиться к съемке.</p>
        </article>
        <article className="price__theOrderOfWork__box">
          <h3 className="price__theOrderOfWork__box__title">Съемка</h3>
          <p className="price__theOrderOfWork__box__text">Самое интересное — процесс съемки. Я стараюсь сделать комфортные условия для вас.</p>
        </article>
        <article className="price__theOrderOfWork__box">
          <h3 className="price__theOrderOfWork__box__title">Ретушь</h3>
          <p className="price__theOrderOfWork__box__text">Я отправлю вам все фотографии со съемки и вы сможете сами отобрать фотографии для ретуши.</p>
        </article>
        <article className="price__theOrderOfWork__box">
          <h3 className="price__theOrderOfWork__box__title">Материалы</h3>
          <p className="price__theOrderOfWork__box__text">Готовые кадры я отправлю вам в течении 10-ти дней после отбора.</p>
        </article>
      </section>
      <section className="price__cost center">
        <article className="price__cost__box">
          <img src="/imgForPrice/IndiviualPhotoSession.jpg" className="price__cost__box__img" alt="Пример индивидуального фото"></img>
          <h3 className="price__cost__box__title">Индивидуальная фотосессия</h3>
          <p className="price__cost__box__shooterCost">4000 р.</p>
          <ul className="price__cost__box__list">
            В стоимость входит:
            <li className="price__cost__box__list__text">Консультация при подготовке к съемке: обсуждение идеи, образов</li>
            <li className="price__cost__box__list__text">Разработка маршрута для прогулки или подбор фотостудий, подходящих под идею</li>
            <li className="price__cost__box__list__text">Авторская обработка и ретушь 10-ти фотографий</li>
            <li className="price__cost__box__list__text">Все хорошие исходники (по желанию)</li>
            <li className="price__cost__box__list__text">Передача готовых фотографий через персональный сайт-галерею</li>
          </ul>
          <p className="price__cost__box__text">Аренда фотостудии для съемки, услуги визажиста, стилиста оплачиваются отдельно.</p>
        </article>
        <article className="price__cost__box">
          <img className="price__cost__box__img" src="/imgForPrice/loveStory.jpg" alt="пример Love Story фотографии"></img>
          <h3 className="price__cost__box__title">Love story</h3>
          <p className="price__cost__box__shooterCost">4500 р.</p>
          <ul className="price__cost__box__list">
            В стоимость входит:
            <li className="price__cost__box__list__text">Консультация при подготовке к съемке: обсуждение идеи, образов</li>
            <li className="price__cost__box__list__text">Разработка маршрута для прогулки или подбор фотостудий, подходящих под идею</li>
            <li className="price__cost__box__list__text">Авторская обработка и ретушь 15-ти фотографий</li>
            <li className="price__cost__box__list__text">Все хорошие исходники (по желанию)</li>
            <li className="price__cost__box__list__text">Передача готовых фотографий через персональный сайт-галерею</li>
          </ul>
          <p className="price__cost__box__text">Аренда фотостудии для съемки, услуги визажиста, стилиста оплачиваются отдельно.</p>
        </article>
        <article className="price__cost__box">
          <img className="price__cost__box__img" src="/imgForPrice/groopPhoto.jpg" alt="Пример группового фото"></img>
          <h3 className="price__cost__box__title">Групповая/семейная фотосессия</h3>
          <p className="price__cost__box__shooterCost">от 4500 р.</p>
          <ul className="price__cost__box__list">
            В стоимость входит:
            <li className="price__cost__box__list__text">Консультация при подготовке к съемке: обсуждение идеи, образов</li>
            <li className="price__cost__box__list__text">Разработка маршрута для прогулки или подбор фотостудий, подходящих под идею</li>
            <li className="price__cost__box__list__text">40 фотографий в авторской обработке и легкой ретуши </li>
            <li className="price__cost__box__list__text">Все хорошие исходники (по желанию)</li>
            <li className="price__cost__box__list__text">Передача готовых фотографий через персональный сайт-галерею</li>
            <li className="price__cost__box__list__text">Конечная стоимость зависит от количества человек</li>
          </ul>
          <p className="price__cost__box__text">Аренда фотостудии для съемки, услуги визажиста, стилиста оплачиваются отдельно.</p>
        </article>
        <article className="price__cost__box">
          <img className="price__cost__box__img" src="/imgForPrice/reportageShooting.jpg" alt="Репортажная съемка" />
          <h3 className="price__cost__box__title">Репортажная съемка</h3>
          <p className="price__cost__box__shooterCost">от 4500 р.</p>
          <ul className="price__cost__box__list">
            В стоимость входит:
            <li className="price__cost__box__list__text">Консультация при подготовке к съемке вашего мероприятия</li>
            <li className="price__cost__box__list__text">Разработка маршрута для прогулки или подбор фотостудий, подходящих под идею</li>
            <li className="price__cost__box__list__text">70-100 фотографий в авторской обработке и легкой ретуши Все хорошие исходники (по желанию)</li>
            <li className="price__cost__box__list__text">Передача готовых фотографий через персональный сайт-галерею</li>
          </ul>
        </article>
      </section>
      <section className="price__certificate center">
        <h2 className="price__certificate__title">Подарочный сертификат</h2>
        <p className="price__certificate__text">Прекрасным подарком на любой праздник может стать подарочный сертификат на фотосессию.</p>
      </section>
      <section className="price__weddingPackage center ">
        <h2>Пакеты для свадебной съемки</h2>
        <article className="price__weddingPackage__box boxStyleTypeOne">
          <article className="price__weddingPackage__box__about">
            <h2 className="price__weddingPackage__box__about__title">Пакет № 1 «Uno»</h2>
            <h3 className="price__weddingPackage__box__about__name">Загс, прогулка и банкет</h3>
            <p className="price__weddingPackage__box__about__cost">от 10 000 р.</p>
            <p className="price__weddingPackage__box__about__text">Первые 2 часа — торжественная регистрация в ЗАГСе и прогулка (1-2 локации рядом)</p>
            <ul className="price__weddingPackage__box__about__list">
              <li className="price__weddingPackage__box__about__list__point">Консультация при подготовке к съемке</li>
              <li className="price__weddingPackage__box__about__list__point">Разработка фото-маршрута</li>
              <li className="price__weddingPackage__box__about__list__point">от 70-ти фотографий с каждого часа в авторской обработке (цветокоррекция и легкая ретушь)</li>
              <li className="price__weddingPackage__box__about__list__point">10 фотографий в ретуши на ваш выбор</li>
              <li className="price__weddingPackage__box__about__list__point">Передача готовых фотографий через персональный сайт-галерею</li>
              <li className="price__weddingPackage__box__about__list__point">Конечная стоимость может быть скорректирована в зависимости от ваших пожеланий и формата фотосъемки</li>
              <li className="price__weddingPackage__box__about__list__point">Каждый последующий час свадебного дня — 4000 р.</li>
            </ul>
            <p className="price__weddingPackage__box__about__text">Дополнительно вы можете заказать услуги стилиста, визажиста (я могу порекомендовать специалистов, с которыми работаю сама и уверена в их результате).</p>
          </article>
          <img alt="Пакет UNO" src="/imgForPrice/reportageShooting.jpg" className="price__weddingPackage__box__img"></img>
        </article>
        <article className="price__weddingPackage__box boxStyleTypeTwo">
          <article className="price__weddingPackage__box__about">
            <h2 className="price__weddingPackage__box__about__title">Пакет № 2 «Due»</h2>
            <h3 className="price__weddingPackage__box__about__name">Загс, прогулка и банкет — 2</h3>
            <p className="price__weddingPackage__box__about__cost">от 13 000 р.</p>
            <p className="price__weddingPackage__box__about__text">Первые 3 часа — торжественная регистрация в ЗАГСе и прогулка (2-3 локации)</p>
            <ul className="price__weddingPackage__box__about__list">
              <li className="price__weddingPackage__box__about__list__point">Консультация при подготовке к съемке</li>
              <li className="price__weddingPackage__box__about__list__point">Разработка фото-маршрута</li>
              <li className="price__weddingPackage__box__about__list__point">от 70-ти фотографий с каждого часа в авторской обработке (цветокоррекция и легкая ретушь)</li>
              <li className="price__weddingPackage__box__about__list__point">10 фотографий в ретуши на ваш выбор</li>
              <li className="price__weddingPackage__box__about__list__point">Передача готовых фотографий через персональный сайт-галерею</li>
              <li className="price__weddingPackage__box__about__list__point">Конечная стоимость может быть скорректирована в зависимости от ваших пожеланий и формата фотосъемки</li>
              <li className="price__weddingPackage__box__about__list__point">Каждый последующий час свадебного дня — 4000 р.</li>
            </ul>
            <p className="price__weddingPackage__box__about__text">Дополнительно вы можете заказать услуги стилиста, визажиста (я могу порекомендовать специалистов, с которыми работаю сама и уверена в их результате).</p>
          </article>
          <img alt="Пакет Due" src="/imgForPrice/reportageShooting.jpg" className="price__weddingPackage__box__img"></img>
        </article>
        <article className="price__weddingPackage__box boxStyleTypeOne">
          <article className="price__weddingPackage__box__about">
            <h2 className="price__weddingPackage__box__about__title">Пакет № 3 «Tre»</h2>
            <h3 className="price__weddingPackage__box__about__name">Утро невесты, загс, прогулка и банкет</h3>
            <p className="price__weddingPackage__box__about__cost">от 16 000 р.</p>
            <p className="price__weddingPackage__box__about__text">Сборы невесты. Следующие 3 часа — торжественная регистрация в ЗАГСе и прогулка (1-2 локации рядом)</p>
            <ul className="price__weddingPackage__box__about__list">
              <li className="price__weddingPackage__box__about__list__point">Консультация при подготовке к съемке</li>
              <li className="price__weddingPackage__box__about__list__point">Разработка фото-маршрута</li>
              <li className="price__weddingPackage__box__about__list__point">от 70-ти фотографий с каждого часа в авторской обработке (цветокоррекция и легкая ретушь)</li>
              <li className="price__weddingPackage__box__about__list__point">10 фотографий в ретуши на ваш выбор</li>
              <li className="price__weddingPackage__box__about__list__point">Передача готовых фотографий через персональный сайт-галерею</li>
              <li className="price__weddingPackage__box__about__list__point">Конечная стоимость может быть скорректирована в зависимости от ваших пожеланий и формата фотосъемки</li>
              <li className="price__weddingPackage__box__about__list__point">Каждый последующий час свадебного дня — 4000 р.</li>
            </ul>
            <p className="price__weddingPackage__box__about__text">Дополнительно вы можете заказать услуги стилиста, визажиста (я могу порекомендовать специалистов, с которыми работаю сама и уверена в их результате).</p>
            <p className="price__weddingPackage__box__about__text">Если сборы невесты проходят в студии, то студия для съемки оплачивается отдельно.</p>
          </article>
          <img alt="Пакет Tre" src="/imgForPrice/reportageShooting.jpg" className="price__weddingPackage__box__img"></img>
        </article>
      </section>

      <Footer />
    </>
  );
}

export default Price;
