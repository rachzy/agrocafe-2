import "./Header.css";

import AgrocafeLogo from "../../assets/logos/agrocafe.png";
import NetafimLogo from "../../assets/logos/netafim.png";
import SyngentaLogo from "../../assets/logos/syngenta.png";

import DefaultSection from "./DefaultSection";
import MobileSection from "./MobileSection";

interface IOptions {
  label: string;
  href?: string;
}
[];

export interface IPropsSections {
  options: IOptions[];
  discriminator: string;
}

const Header = () => {
  const options: IOptions[] = [
    {
      label: "Sobre Nós",
      href: "#sobre",
    },
    {
      label: "Números",
      href: "#numeros",
    },
    {
      label: "Expertise",
      href: "#expertise",
    },
    {
      label: "Projetos e Serviços",
      href: "#projetos",
    },
    {
      label: "Perguntas e Respostas",
      href: "#faq",
    },
    {
      label: "Contatos",
      href: "#contato",
    },
  ];

  function handleLogoClick() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <header>
        <div className="super-header">
          <a href="http://netafim.com.br/" target="_blank">
            <img
              style={{ width: "13vh" }}
              src={NetafimLogo}
              className="netafim logo"
            />
          </a>
          <a href="https://www.syngenta.com.br/" target="_blank">
            <img src={SyngentaLogo} className="syngenta logo" />
          </a>
        </div>
        <div className={`header-mobile-logo`}>
          <img onClick={handleLogoClick} src={AgrocafeLogo} alt="logo agrocafe" />
        </div>
        <DefaultSection options={options} discriminator={"default"} />
        <MobileSection
          options={options}
          discriminator={"mobile"}
        />
      </header>
    </>
  );
};

export default Header;
