import React from "react";
import "./Numeros.css";

import LightIcon from "../../assets/icons/inovacao-tecnologia.png";
import FarmerIcon from "../../assets/icons/produtores.png";
import IrrigarIcon from "../../assets/icons/irrigacao.png";

const Numeros = () => {
  return (
    <section className="numeros-section">
      <div className="content">
        <div className="info">
          <img src={LightIcon} />
          <h1>+20</h1>
          <p>
            <b>anos</b> de inovação e tecnologia
          </p>
        </div>
        <div className="info">
          <img src={FarmerIcon} />
          <h1>+150</h1>
          <p>
            <b>produtores atendidos</b> com consultoria agronômica
          </p>
        </div>
        <div className="info">
          <img src={IrrigarIcon} />
          <h1>+20.000</h1>
          <p>
            <b>hectares de irrigação</b> já implantados
          </p>
        </div>
      </div>
    </section>
  );
};

export default Numeros;
