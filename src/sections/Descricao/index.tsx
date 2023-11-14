import "./Descricao.css";

import Background from "../../assets/background/curvas-de-nivel.png";

import Box from "../../components/Box";
import Title from "../../components/Title";

const Descricao = () => {
  return (
    <section
      className="desc-section"
      id="sobre"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="main-content-wrapper">
        <div className="content">
          <div className="content-wrapper">
            <div className="box-container">
              <Box title="Missão" className="blue">
                <p>
                  Ser reconhecida como parceira na geração de valor no
                  agronegócio, com excelência e sustentabilidade.
                </p>
              </Box>
              <Box title="Visão" className="yellow">
                <p>
                  Liderar a comercialização de insumos, serviços e tecnologia de
                  irrigação para a produção de alimentos, impactando,
                  positivamente, as gerações futuras.
                </p>
              </Box>
            </div>
            <div className="box-container">
              <Box title="Valores" className="green">
                <ul>
                  <li>
                    <p>Ética;</p>
                  </li>
                  <li>
                    <p>Respeito;</p>
                  </li>
                  <li>
                    <p>Credibilidade;</p>
                  </li>
                  <li>
                    <p>Lealdade;</p>
                  </li>
                  <li>
                    <p>Excelência;</p>
                  </li>
                  <li>
                    <p>Inovação;</p>
                  </li>
                  <li>
                    <p>Sustentabilidade.</p>
                  </li>
                </ul>
              </Box>
            </div>
          </div>
          <div className="content-wrapper justify">
            <Title>Somos a AgroCafé!</Title>
            <p>
              Representamos o trabalho pioneiro que trouxe novos caminhos e
              prosperidade para Monte Carmelo e região, em Minas Gerais.
            </p>

            <p>
              Desenvolvemos soluções inteligentes para o campo e o agronegócio,
              inovações tecnológicas, comercialização de insumos, fertilizantes,
              defensivos, mudas de café, além de outros grãos e técnicas de
              irrigação, que garantem a produtividade com qualidade e
              sustentabilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Descricao;
