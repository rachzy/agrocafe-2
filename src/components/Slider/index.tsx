import React, { useEffect, useState } from "react";
import "./Slider.css";

interface IProps {
  images: string[];
  floatingDots?: boolean;
}

const Slider: React.FC<IProps> = ({ images, floatingDots }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function renderImages() {
    return images.map((image, index) => {
      return (
        <div
          key={image}
          className={`slide ${index === currentSlide && "active"}`}
        >
          <img src={image} />
        </div>
      );
    });
  }

  function renderDots() {
    return images.map((image, index) => {
      return (
        <div
          key={image}
          className={`dot ${index === currentSlide && "verde background"}`}
        />
      );
    });
  }

  useEffect(() => {
    setInterval(() => {
      setCurrentSlide((currentValue) => {
        if (currentValue >= images.length - 1) return 0;
        return currentValue + 1;
      });
    }, 5000);
  }, [images.length]);

  return (
    <>
      <div className="slider">
        {floatingDots && <div className="dots float">{renderDots()}</div>}
        <div className="slides">{renderImages()}</div>
      </div>
      {!floatingDots && <div className="dots">{renderDots()}</div>}
    </>
  );
};

export default Slider;
