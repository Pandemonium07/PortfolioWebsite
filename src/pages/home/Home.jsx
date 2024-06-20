// src/pages/Home/Home.js
import React, { useState, useRef } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { MdClear } from "react-icons/md";
import Header from "../../components/Header/Header";
import VideoDemo from "../../assets/videos/demo.mp4";
import PhotoAbout from "../../assets/img/Home/photoabout.jpg";
import Footer from "../../components/Footer/Footer";
import Indicator from "../../components/Indicators/Indicator";

const Home = () => {
  const [vidOpen, setVidOpen] = useState(false);
  const sectionsRef = useRef([useRef(null), useRef(null)]);

  const toggleVidFullScreen = () => {
    setVidOpen(!vidOpen);
  };

  return (
    <div className="Home">
      <Header />
      {vidOpen && (
        <div className="fullscreen-section">
          <a
            href="#"
            className="closevideofullscreen"
            onClick={toggleVidFullScreen}
          >
            <MdClear />
          </a>
          <video controls controlsList="nodownload">
            <source src={VideoDemo} type="video/mp4" />
          </video>
        </div>
      )}

      <section className="content1">
        <div className="video-background">
          <video className="bandedemo" src={VideoDemo} autoPlay loop muted />
        </div>
        <div className="overlay"></div>
        <div className="button-container">
          <button onClick={toggleVidFullScreen}>PLAY</button> <br />
        </div>
        <div className="arrow">
          <IoIosArrowRoundDown />
        </div>
      </section>
      <Indicator sections={sectionsRef.current} />
      <section className="content2" ref={sectionsRef.current[0]}>
        <div>
          <img src={PhotoAbout} alt="photo presentation" />
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            deleniti, nihil perspiciatis temporibus repudiandae optio?
            Asperiores distinctio quo odit delectus, ratione animi minima fuga
            aperiam. Mollitia, in! Nesciunt, consequatur soluta.
          </p>
        </div>
      </section>
      <section className="content3" ref={sectionsRef.current[1]}>
        <h2>Contactez-moi</h2>
        <form action="send_mail.php" method="post">
          <label htmlFor="email">Adresse Mail:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Objet:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="8" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
