import { Link } from "react-router";

import "../../css/HeaderCss/header.css";
function Header() {
  return (
    <section className=" header center">
      <Link className="header__navLink" to={"/"}>
        Главная
      </Link>
      <Link className="header__navLink" to={"/portfolio"}>
        Портфолио
      </Link>
      <Link className="header__navLink" to={"/price"}>
        Стоимость и условия работы
      </Link>
      <Link className="header__navLink" to={"/contacts"}>
        Контакты
      </Link>
    </section>
  );
}

export default Header;
