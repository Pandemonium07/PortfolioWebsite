
import { TiThMenuOutline } from "react-icons/ti";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleMobileMenu = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav >
      {navOpen && (
        <div className="sidebar" >
          <ul>
            <a
              to="#"
              className="close-hamburgers"
              onClick={toggleMobileMenu}
            >
              <li>
                <MdClear />
              </li>
            </a>

            <a
              to="/films"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Films</li>
            </a>

            <a
              to="/photos"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Photos</li>
            </a>

            <a
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Contact</li>
            </a>
          </ul>
        </div>
      )}

      <div className="navbar">
        <ul>
          <Link
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <p>Tiphaine HOCQUINGHEM</p>
              <p>GAFFER & D.O.P</p>
            </li>
          </Link>

          <Link
            to="/films"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Films</li>
          </Link>

          <Link
            to="/photos"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Photos</li>
          </Link>

          <Link
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Contact</li>
          </Link>
          <a to="#" className="open-hamburgers" onClick={toggleMobileMenu}>
            <li>
              <TiThMenuOutline />
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Header;