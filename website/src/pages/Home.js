import Header from "../components/header/Header";
import "../css/homeCss/home.css";
import AboutMeHome from "../components/HomeComponents/aboutMeHome";
import QuestionsHome from "../components/HomeComponents/QuestionsHome";
import Footer from "../components/footerComponets/footer";
import ChangingBaner from "../components/HomeComponents/ChangingBaner";
import LinkPhoto from "../components/HomeComponents/LinkPhoto";
import { Link } from "react-router";

function Home() {
  return (
    <section className="Home">
      <Header />
      <ChangingBaner />
      <AboutMeHome />
      <LinkPhoto />
      <section children className="BtnToPortfolio_center">
        <Link className="BtnToPortfolio" to={"/portfolio"}>
          Ознакомиться с портфолио
        </Link>
      </section>

      <QuestionsHome />
      <Footer />
    </section>
  );
}

export default Home;
