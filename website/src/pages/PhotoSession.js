import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { fetchPhoto } from "../store/photosSlice";
import { useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css"; //подключена библиотека npm install react-photo-view
import Header from "../components/header/Header";
import Footer from "../components/footerComponets/footer";
import "../css/photoSessionCss/photoSession.css"

function Photosession(items) {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const URL = location.pathname;
  let masUrl = URL.split("/");
  //   console.log(masUrl);
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.photos.albums);
  useEffect(() => {
    dispatch(fetchPhoto());
  }, [dispatch]);
  let photos;
  let title;

  try {
    const needAlbum = albums.find((album) => album.name == masUrl[2]);

    if (needAlbum == undefined) {
      navigate("/404", { replace: true });
      // window.location.href = "/404";
    }

    albums.map((album) => {
      if (album.name === masUrl[2]) {
        const needPhotoSession = album.items.find((item) => item.name == name);
        if (needPhotoSession != undefined) {
          album.items.map((item) => {
            if (item.name === name) {
              title = item.title
              photos = item.photos;
            }
          });
        } else {
          navigate("/404", { replace: true });
        }
      }
    });
  } catch (error) {
    console.log(error.message);
  }

  return (
    <>
      <Header />
      <h1 className="Photosession__title">{title}</h1>;
      <PhotoProvider speed={() => 600} easing={(type) => (type === 2 ? "cubic-bezier(0.36, 0, 0.66, -0.56)" : "cubic-bezier(0.34, 1.56, 0.64, 1)")}>
        <div className="foo  photos center">
          {photos
            ? photos.map((item, index) => (
                <PhotoView key={index} src={item}>
                  <img className="photos__photo" src={item} alt="Фотография" />
                </PhotoView>
              ))
            : null}
        </div>
      </PhotoProvider>
      <Footer />
    </>
  );
}

export default Photosession;
