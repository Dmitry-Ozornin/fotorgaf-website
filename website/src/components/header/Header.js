import { Link } from "react-router";

import "./header.css";
function Header() {
  return (
    <section className=" header center">
      <Link className="header__navLink" to={"/"}>
        Главная
      </Link>
      <Link className="header__navLink" to={"/portfolio"}>
        Портфолио
      </Link>
      <Link className="header__navLink" to={"/contacts"}>
        Контакты
      </Link>
      <Link className="header__navLink" to={"/price"}>
        Стоимость и условия работы
      </Link>

      <button className="header__submitYourApplication clicking">Оставить заявку</button>
    </section>
  );
}

export default Header;
