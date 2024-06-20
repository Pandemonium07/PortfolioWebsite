import React, { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import photo1 from "../../../assets/img/Videos/michel2.jpg";
import photo2 from "../../../assets/img/Home/photoabout.jpg";
import "./_portrait.scss";

const photos = [
  { id: 1, url: photo1 },
  { id: 2, url: photo2 },
  { id: 3, url: photo1 },
  { id: 4, url: photo2 },
  { id: 5, url: photo1 },
  { id: 6, url: photo2 },
  { id: 7, url: photo1 },
  { id: 8, url: photo2 },
];

const PortraitCaroussel = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isPhotoViewerOpen, setIsPhotoViewerOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

  const handleToggleGallery = () => {
    setShowGallery(!showGallery);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsPhotoViewerOpen(true);
  };

  const handleClosePhotoViewer = () => {
    setIsPhotoViewerOpen(false);
    setSelectedPhoto(null);
  };

  const handleNextPhoto = () => {
    const currentIndex = photos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    const currentIndex = photos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIndex]);
  };

  return (
    <div className="Gallery">
      <div>
        <div className="titreportrait">
          <h1>
            PORTRAIT - PORTRAIT - PORTRAIT - PORTRAIT - PORTRAIT - PORTRAIT -
            PORTRAIT - PORTRAIT - PORTRAIT - PORTRAIT
          </h1>
        </div>
        <div className="portraitcarroussel">
          <Slider {...settings}>
            {photos.map((photo) => (
              <div key={photo.id} className="photo-container">
                <img
                  src={photo.url}
                  alt={`photo-${photo.id}`}
                  className="photo"
                  onClick={() => handlePhotoClick(photo)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div>
        <button id="toggleGallery" onClick={handleToggleGallery}>
          {showGallery ? "Voir Moins" : "Voir Plus"}
        </button>
        {showGallery && (
          <div className="showgallery-active" style={{ marginTop: "20px" }}>
            <div>
              {photos.map((photo) => (
                <div key={photo.id} className="photo-container">
                  <img
                    src={photo.url}
                    alt={`photo-${photo.id}`}
                    className="photo"
                    onClick={() => handlePhotoClick(photo)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {isPhotoViewerOpen && selectedPhoto && (
        <div className="photo-viewer">
          <button
            onClick={handlePrevPhoto}
            style={{ padding: "0 5% " }}
            className="nav-button"
          >
            <IoIosArrowBack />
          </button>
          <div className="photo-viewer-content">
            <img
              src={selectedPhoto.url}
              alt={`photo-${selectedPhoto.id}`}
              style={{ maxHeight: "80vh", maxWidth: "80vw" }}
            />
            <button onClick={handleClosePhotoViewer} className="close-button">
              <IoIosClose />
            </button>
          </div>

          <button
            onClick={handleNextPhoto}
            style={{ padding: "0 5%" }}
            className="nav-button"
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}
    </div>
  );
};

export default PortraitCaroussel;
