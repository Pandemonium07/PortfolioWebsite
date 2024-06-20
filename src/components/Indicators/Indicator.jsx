// src/components/Indicators/Indicator.js
import React, { useEffect, useRef, useState } from "react";

const Indicator = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef(sections);

  const handleClick = (index) => {
    sectionsRef.current[index].current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentIndex = sectionsRef.current.findIndex((section) => {
        const rect = section.current.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
      });
      setActiveIndex(currentIndex);
    };

    const homeElement = document.querySelector(".Home");
    homeElement.addEventListener("scroll", handleScroll);

    handleScroll(); // Initial call to set the active indicator

    return () => {
      homeElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="indicators">
      {sections.map((_, index) => (
        <div
          key={index}
          className={`indicator ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Indicator;
