import React, { useEffect, useState } from "react";
import "./Slider.css";

import SliderDireita from "../../assets/imagens/botoes/slider-direita.png";
import SliderEsquerda from "../../assets/imagens/botoes/slider-esquerda.png";

import TitleImage from "../../assets/imagens/demais-imagens/soluções-slider.png";

interface IProps {
  images: string[];
  floatingDots?: boolean;
}

const Slider: React.FC<IProps> = ({ images, floatingDots }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlideButtonClick() {
    setCurrentSlide((currentValue) => {
      if (currentValue >= images.length - 1) return 0;
      return currentValue + 1;
    });
  }

  function handlePreviousSlideButtonClick() {
    setCurrentSlide((currentValue) => {
      if (currentValue === 0) return images.length - 1;
      return currentValue - 1;
    });
  }

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
    setInterval(handleNextSlideButtonClick, 5000);
  }, []);

  return (
    <>
      <div className="slider">
        <div className="buttons">
          <button onClick={handlePreviousSlideButtonClick}>
            <img src={SliderEsquerda} />
          </button>
          <button onClick={handleNextSlideButtonClick}>
            <img src={SliderDireita} />
          </button>
        </div>
        {floatingDots && <div className="dots float">{renderDots()}</div>}

        <img
          className="main-title"
          src={TitleImage}
          alt="solucoes de irrigacao"
        />
        <div className="slides">{renderImages()}</div>
      </div>
      {!floatingDots && <div className="dots">{renderDots()}</div>}
    </>
  );
};

export default Slider;
