import "./Footer.css";

import LogoOrgulhasamenteIrrigante from "../../assets/logos/orgulhosamente-irrigante.png";
import FooterCima from "../../assets/other/ceta-perguntas.png";
import LogoAgrocafeRodape from "../../assets/logos/agrocafe.png";
import LogoNetafimRodape from "../../assets/logos/netafim.png";
import LogoSyngenta from "../../assets/logos/syngenta.png";

import TelephoneIcon from "../../assets/icons/telefone.png";
import WhatsappIcon from "../../assets/icons/whatsapp.png";
import EmailIcon from "../../assets/icons/contato.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import LocalizacaoIcon from "../../assets/icons/localizacao.png";

import LogoPortfolio from "../../assets/logos/portfolio.png";

import ContactBox from "../ContactBox/index";

const Footer = () => {
  return (
    <footer id="contato">
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
        <div className="contact-block logos">
          <div />
          <img
            src={LogoAgrocafeRodape}
            alt="logo agrocafe"
            className="companyLogo"
          />
          <div className="logo-container">
            <a href="http://netafim.com.br/" target="_blank">
              <img
                src={LogoNetafimRodape}
                alt="logo netafim agrocafe"
                style={{ marginTop: "2vh" }}
              />
            </a>
            <a href="https://www.syngenta.com.br/" target="_blank">
              <img src={LogoSyngenta} alt="logo syngenta agrocafe" />
            </a>
          </div>
        </div>
        <div className="contact-block">
          <ContactBox icone={TelephoneIcon}>34 3842-5025</ContactBox>
          <ContactBox icone={WhatsappIcon} href="https://wa.me/5534999084113">
            34 99908-4113
          </ContactBox>
          <ContactBox
            icone={EmailIcon}
            href="mailto:irrigacao@agrocafe.com"
          >
            irrigacao@agrocafe.com
          </ContactBox>
        </div>
        <div className="contact-block">
          <ContactBox
            icone={InstagramIcon}
            flex={1}
            href="https://www.instagram.com/agrocafemonte/"
          >
            @agrocafemonte
          </ContactBox>
          <ContactBox
            icone={LocalizacaoIcon}
            flex={2}
            href="https://maps.app.goo.gl/aezBFkzphmcqga8A9"
          >
            Av. Olegário Maciel, 988, - Bairro Batuque Monte Carmelo/MG, 38500-000
          </ContactBox>
        </div>
      </div>
      <div className="downline">
        <h3>© 2023 AgroCafé.</h3>
        <a href="https://agenciaportfolio.com.br" target="_blank">
          <img src={LogoPortfolio} alt="logo portfolio agrocafe" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
