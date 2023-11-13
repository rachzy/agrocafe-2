import React from "react";
import "./Banner.css";

interface IProps {
  banner: string;
  slogan: string;
}

const ScrollBanner: React.FC<IProps> = ({ banner, slogan }) => {
  return (
    <section
      className="banner-section"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <img src={slogan} />
    </section>
  );
};

export default ScrollBanner;
