import "./Numeros.css";

import CountUp from "react-countup";

import LightIcon from "../../assets/icons/inovacao-tecnologia.png";
import FarmerIcon from "../../assets/icons/produtores.png";
import IrrigarIcon from "../../assets/icons/irrigacao.png";

const Numeros = () => {
  return (
    <section className="numeros-section" id="numeros">
      <div className="content">
        <div className="info">
          <img src={LightIcon} />
          <h1><CountUp end={20} duration={10} enableScrollSpy prefix="+" /></h1>
          <p>
            <b>anos</b> de inovação e tecnologia
          </p>
        </div>
        <div className="info">
          <img src={FarmerIcon} />
          <h1><CountUp end={150} duration={10} enableScrollSpy prefix="+"  /></h1>
          <p>
            <b>produtores atendidos</b> com consultoria agronômica
          </p>
        </div>
        <div className="info">
          <img src={IrrigarIcon} />
          <h1><CountUp end={20000} duration={10} enableScrollSpy prefix="+" formattingFn={(number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} /></h1>
          <p>
            <b>hectares de irrigação</b> já implantados
          </p>
        </div>
      </div>
    </section>
  );
};

export default Numeros;
