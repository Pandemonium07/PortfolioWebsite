import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Videotest from "../../assets/videos/demo.mp4";
import imgtest1 from "../../assets/img/Videos/michel2.jpg";
import { Link } from "react-router-dom";
import { MdClear } from "react-icons/md";
import HoverVideoPlayer from "react-hover-video-player";

const Films = () => {
  const [vidOpen, setVidOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const toggleVidFullScreen = (video) => {
    setSelectedVideo(video);
    setVidOpen(!vidOpen);
  };

  const videoData = [
    {
      id: 1,
      videoSrc: Videotest,
      imgSrc: imgtest1, // Remplacez par l'URL de votre image
      title: "Vitapub",
      poste: "Réalisatrice",
    },
    {
      id: 2,
      videoSrc: Videotest,
      imgSrc: imgtest1, // Remplacez par l'URL de votre image
      title: "Vitapub",
      poste: "Réalisatrice",
    },
    {
      id: 3,
      videoSrc: Videotest,
      imgSrc: imgtest1, // Remplacez par l'URL de votre image
      title: "Vitapub",
      poste: "Réalisatrice",
    },
    {
      id: 4,
      videoSrc: Videotest,
      imgSrc: imgtest1, // Remplacez par l'URL de votre image
      title: "Vitapub",
      poste: "Réalisatrice",
    },
    {
      id: 5,
      videoSrc: Videotest,
      imgSrc: imgtest1, // Remplacez par l'URL de votre image
      title: "Vitapub",
      poste: "Réalisatrice",
    },
    {
      id: 6,
      videoSrc: Videotest,
      imgSrc: imgtest1, // Remplacez par l'URL de votre image
      title: "Vitapub",
      poste: "Réalisatrice",
    },
    // ... Ajoutez d'autres vidéos avec leurs images de fond
  ];

  return (
    <div className="Films">
      <Header />
      <div className="vidcontent">
        <div className="vidgallery">
          {videoData.map((video, index) => (
            <div
              key={index}
              className="videos"
              onClick={() => toggleVidFullScreen(video)}
            >
              <HoverVideoPlayer
                videoSrc={video.videoSrc}
                pausedOverlay={
                  <img
                    src={video.imgSrc}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
              <h3 className="videotitle">{video.title}</h3>
              <p className="videoposte">{video.poste}</p>
            </div>
          ))}
          {vidOpen && (
            <div className="overlayfullscreen">
              <Link
                to="#"
                className="closevideofullscreen"
                onClick={() => setVidOpen(false)}
              >
                <li>
                  <MdClear />
                </li>
              </Link>
              <video controls>
                <source src={selectedVideo.videoSrc} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Films;
