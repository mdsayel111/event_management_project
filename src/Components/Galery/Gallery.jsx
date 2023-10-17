import { useState } from "react";
import "./Gallery.css";
import { FaPlay } from "react-icons/fa";
import { DefaultPlayer } from "react-html5video";
import "react-html5video/dist/styles.css";

const Gallery = () => {
  const [gallery, setGallery] = useState("photo");

  return (
    <div className="my-10 space-y-6 gallery">
      <h1 className="text-2xl font-extrabold text-secondary text-center">
        Gallery Of The Events Managed By Us
      </h1>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setGallery("photo")}
          className={gallery == "photo" ? "btn btn-primary" : "btn"}
        >
          Photo
        </button>
        <button
          onClick={() => setGallery("video")}
          className={gallery == "video" ? "btn btn-primary" : "btn"}
        >
          Video
        </button>
      </div>
      {gallery == "photo" ? (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 img-container gap-4">
            <img
              data-aos="zoom-in"
              src="https://i.ibb.co/WxqBfT3/aboodi-vesakaran-ox-P3bl3x-QPI-unsplash-min.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in"
              src="https://i.ibb.co/2gnZB1P/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash-min.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in"
              src="https://i.ibb.co/BZ1L0gc/chuttersnap-Q-Kdj-Kxnt-H8-unsplash-min.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in"
              src="https://i.ibb.co/28XKKD7/mitchell-lawler-tbaory-Uol-E-unsplash-min.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in"
              src="https://i.ibb.co/c12CPTY/ibrahim-boran-m8-Yj-B0no-Wi-Y-unsplash-min.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in"
              src="https://i.ibb.co/25CnR49/chuttersnap-a-En-H4h-J-Mrs-unsplash-min.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in"
              src="https://i.ibb.co/YbXnnZY/e3-min.jpg"
              alt=""
            />
            <img
              data-aos="zoom-in"
              src="https://i.ibb.co/2v3vmtd/restaurant-hall-with-tables-decorated-with-tall-vases-with-roses-1304-4823-min.jpg"
              alt=""
            />
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 img-container gap-4">
          <div className="flex justify-center">
            <iframe
              width="full"
              height={200}
              src="https://www.youtube.com/embed/fja0XguUzwM"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
          <div className="flex justify-center">
            <iframe
              width="full"
              height={200}
              src="https://www.youtube.com/embed/C59ViBJSyhU"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
          <div className="flex justify-center">
            <iframe
              width="full"
              height={200}
              src="https://www.youtube.com/embed/dc7GNQpOFl0"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
          <div className="flex justify-center">
            <iframe
              width="full"
              height={200}
              src="https://www.youtube.com/embed/JS6BixwY0NU"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
          <div className="flex justify-center">
            <iframe
              width="full"
              height={200}
              src="https://www.youtube.com/embed/TOnUWGN2ZRI"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
          <div className="flex justify-center">
            <iframe
              width="full"
              height={200}
              src="https://www.youtube.com/embed/zx2VE90rqaM"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
          <div className="flex justify-center">
            <iframe
              width="full"
              height={200}
              src="https://www.youtube.com/embed/GOZDDnF4k0c"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
          <div className="flex justify-center">
            <iframe
              width="full"
              height={200}
              src="https://www.youtube.com/embed/u-SjTRp_9JY"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
