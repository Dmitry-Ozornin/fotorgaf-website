import Header from "../components/header/Header";
import "../css/portfolioCss/portfolio.css";
import Footer from "../components/footerComponets/footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhoto } from "../store/photosSlice";
import { useEffect } from "react";
import { Link } from "react-router";

function Portfolio() {
  const albums = useSelector((state) => state.photos.albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhoto());
  }, [dispatch]);
  return (
    <section>
      <Header />
      <section className="portfolio">
        <h1 className="portfolio__title">Альбомы</h1>
        <section className="portfolio__albums">
          {albums.map((album) => {
            return (
              <Link key={album.name} id={album.name} to={`/portfolio/${album.name}`} className="portfolio__albums__map">
                <img src={album.cover} alt="Обложка альбома" className="portfolio__albums__image" />
                <h1 className="portfolio__albums__title">{album.title}</h1>

                <p className="portfolio__albums__about">{album.aboutAlbum}</p>
              </Link>
            );
          })}
        </section>
      </section>
      <Footer />
    </section>
  );
}

export default Portfolio;
