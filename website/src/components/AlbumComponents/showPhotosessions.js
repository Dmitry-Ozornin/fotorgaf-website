// import { useSelector } from "react-redux";
import { Link } from "react-router";
import "../../css/AlbumCss/album.css";

function ShowPhotosession({ name, album, items }) {
  // const albums = useSelector((state) => state.photos.albums);
  // console.log(album);

  return (
    <section className="ShowPhotosession">
      <h1 className="ShowPhotosession__title center">{album}</h1>
      <section className="ShowPhotosession__box">
        {items.map((sessions) => {
          console.log(sessions.photos);

          return (
            <Link key={sessions.name}  to={`/portfolio/${name}/${sessions.name}`}  >
              <img src={sessions.cover} className="ShowPhotosession__box_image" alt="Обложка фотосессии"></img>
              <h1 className="ShowPhotosession__box_title">{sessions.title}</h1>
            </Link>
          );
        })}
      </section>
    </section>
  );
}

export default ShowPhotosession;
