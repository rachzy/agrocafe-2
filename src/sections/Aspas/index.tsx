import React from "react";
import "./Aspas.css";

import OpeningQuotesBlue from "../../assets/other/aspas-cima1.png";
import ClosingQuotesBlue from "../../assets/other/aspas-baixo1.png";
import OpeningQuotesWhite from "../../assets/other/aspas-cima2.png";
import ClosingQuotesWhite from "../../assets/other/aspas-baixo2.png";

interface IProps {
  quotesColor: "Blue" | "White";
  children: string;
  backgroundImage?: string;
}

const Aspas: React.FC<IProps> = ({
  quotesColor,
  children,
  backgroundImage,
}) => {
  const quotes = {
    Blue: {
      opening: OpeningQuotesBlue,
      closing: ClosingQuotesBlue,
    },
    White: {
      opening: OpeningQuotesWhite,
      closing: ClosingQuotesWhite,
    },
  };
  return (
    <section
      className={`aspas-section ${!backgroundImage && "background"}`}
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
    >
      <div className="content">
        <img src={quotes[quotesColor].opening} alt="opening quotes" />
        <p>{children}</p>
        <img src={quotes[quotesColor].closing} alt="opening quotes" />
      </div>
    </section>
  );
};

export default Aspas;
