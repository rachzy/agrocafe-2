import "./Expertise.css";

import IrrigationImage from "../../assets/scrolling/expertise.jpg";

const Expertise = () => {
  return (
    <section className="expertise-section" id="expertise">
      <div className="containers-row">
        <div className="title">
          <h2>Damos suporte com agrônomos técnicos especializados em:</h2>
        </div>
        <div className="blocks">
          <div className="block blue">
            <h2>Café</h2>
          </div>
          <div className="block darkgreen">
            <h2>Milho</h2>
          </div>
          <div className="block green">
            <h2>Soja</h2>
          </div>
          <div className="block brown">
            <h2>Feijão</h2>
          </div>
          <div className="block white">
            <h2>Hortifruti</h2>
          </div>
        </div>
      </div>
      <div className="containers-row">
        <div className="title inverse">
          <h2>Expertise em projetos de ponta a ponta</h2>
          <p>
            Além de contar com uma equipe especializada, que oferece serviços de
            irrigação desde projetos a manutenções, contamos com o "Barter",
            sendo uma das formas de pagamento dos investimentos do produtor.
          </p>
        </div>
        <div
          className="image-banner"
          style={{ backgroundImage: `url(${IrrigationImage})` }}
        />
      </div>
    </section>
  );
};

export default Expertise;
