import React from "react";
import Header from "../../components/Header/Header";
import PortraitCaroussel from "../../components/Gallery/Portrait/Portrait";
import ArgentiqueCaroussel from "../../components/Gallery/Argentique/Argentique";

const Photos = () => {
  return (
    <div className="Photos">
      <Header />
      <section className="section1">
        <PortraitCaroussel />
      </section>
      <section className="section2">
        <ArgentiqueCaroussel />
      </section>
    </div>
  );
};

export default Photos;
