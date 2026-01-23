import { useParams, useLocation, useNavigate } from "react-router";
import Header from "../components/header/Header";
import ShowPhotosession from "../components/AlbumComponents/showPhotosessions";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhoto } from "../store/photosSlice";
import { useEffect } from "react";
import Footer from "../components/footerComponets/footer";

function Album() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const URL = location.pathname;
  let masUrl = URL.split("/");
  const albums = useSelector((state) => state.photos.albums);
  useEffect(() => {
    dispatch(fetchPhoto());
  }, [dispatch]);
  console.log(masUrl);
  const needAlbum = albums.find((album) => album.name == masUrl[2]);

  if (needAlbum == undefined) {
    navigate("/404", { replace: true });
    // window.location.href = "/404";
  }

  return (
    <>
      <Header />
      {albums.map((album) => {
        if (album.name === name) {
          return (
            <>
              <ShowPhotosession key={album.name} name={album.name} album={album.title} items={album.items} />
            </>
          );
        } else {
          return null;
        }
      })}
      <Footer />
    </>
  );
}

export default Album;
