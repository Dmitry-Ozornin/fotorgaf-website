import Header from "../components/header/Header";
import "./css/homeCss/home.css";
import * as React from "react";

import { useState } from "react";
import AboutMeHome from "../components/HomeComponents/aboutMeHome";
import QuestionsHome from "../components/HomeComponents/QuestionsHome";
import Footer from "../components/footerComponets/footer";
import ChangingBaner from "../components/HomeComponents/ChangingBaner";

function Home() {
  return (
    <section>
      <Header />
      <ChangingBaner />
      <AboutMeHome />
      <QuestionsHome />
      <Footer />
    </section>
  );
}

export default Home;
