import "./Footer.css";

import LogoOrgulhasamenteIrrigante from "../../assets/logos/orgulhosamente-irrigante.png";
import FooterCima from "../../assets/imagens/botoes/footer-cima.png";
import LogoAgrocafeRodape from "../../assets/imagens/logos/logo-agrocafe-rodapé.png";
import LogoNetafimRodape from "../../assets/imagens/logos/logo-netafim-assinatura.png";
import FioEntreLogosRodape from "../../assets/imagens/demais-imagens/fio-entre-logos-rodapé.png";
import ImgPortifolio from "../../assets/imagens/logos/portfolio-assinatura.png";

const Footer = () => {
  return (
    <footer>
      <div id="containerImg">
        <img
          id="imgLogo"
          src={LogoOrgulhasamenteIrrigante}
          alt="logo orgulhosamente irrigado"
        />
        <img
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          id="btnCima"
          src={FooterCima}
          alt=""
        />
      </div>

      <div id="containerConteudo">
        <img id="logoAgrocafe" src={LogoAgrocafeRodape} alt="" />
        <img id="fio" src={FioEntreLogosRodape} alt="" />
        <span>
          Desenvolvido por{" "}
          <a href="https://agenciaportfolio.com.br/" target="_blank">
            {" "}
            <img
              id="portifolioAssinatura"
              src={ImgPortifolio}
              alt="Portifolio"
            />
          </a>
        </span>
      </div>
      <a href={"https://www.netafim.com.br/"} target="_blank">
        <div id="containerSerafim" className="verde background">
          <img src={LogoNetafimRodape} alt="Assinatura Netafim" />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
