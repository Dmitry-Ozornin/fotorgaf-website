import { useSelector, useDispatch } from "react-redux";
import { fetchPhoto } from "../../store/photosSlice";
import { useEffect } from "react";
import { Link } from "react-router";
import "../../css/LinkPhoto/linkPhoto.css";
function LinkPhoto() {
  const albums = useSelector((state) => state.photos.albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhoto());
  }, []);
  let linkCount = 0;

  return (
    <section className="albums">
      {albums.map((album) => {
        if (linkCount < 3) {
          linkCount++;
          return (
            <Link key={album.name} id={album.name} to={`/portfolio/${album.name}`} className="albums__map">
              <img src={album.cover} alt="Обложка альбома" className="albums__image" />
              <h1 className="albums__title">{album.title}</h1>

              <p className="albums__about">{album.aboutAlbum}</p>
            </Link>
          );
        }
      })}
    </section>
  );
}

export default LinkPhoto;
