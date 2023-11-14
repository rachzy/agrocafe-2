import "./Header.css";

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

  return (
    <>
      <header>
        <div className="super-header">
          <img src={NetafimLogo} className="netafim-logo" />
          <img src={SyngentaLogo} className="syngenta-logo" />
        </div>
        <DefaultSection options={options} />
        <MobileSection options={options} />
      </header>
    </>
  );
};

export default Header;
