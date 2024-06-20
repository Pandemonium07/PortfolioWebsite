import React from "react";
import { IoLogoInstagram, IoLogoVimeo } from "react-icons/io";

const Footer = () => {
  return (
    <footer >
      <div className="footer-content">
        <div className="reseaux">
          <a href="https://www.instagram.com/tiph.n.photos/">
            <IoLogoInstagram />
          </a>
          <a href="https://vimeo.com/tiphhocq">
            <IoLogoVimeo />
          </a>
        </div>
        <div className="cgv">
          <a href="">CGV</a>
        </div>
        <div className="mentions-legales">
          <p>© Tiphaine Hocquinghem</p>

          <a href="">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;