import {useEffect, useState} from "react";
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
  scrolled?: boolean;
}

const Header = () => {
  const [mobileLogoSmaller, setMobileLogoSmaller] = useState(false);
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

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const {scrollY} = window;

      if(scrollY > 30 && !mobileLogoSmaller) {
        return setMobileLogoSmaller(true);
      }
      setMobileLogoSmaller(false);
    });
  }, []);

  return (
    <>
      <header>
        <div className="super-header">
          <img
            style={{ width: "13vh" }}
            src={NetafimLogo}
            className="netafim logo"
          />
          <img src={SyngentaLogo} className="syngenta logo" />
        </div>
        <div className={`header-mobile-logo ${mobileLogoSmaller && "smaller"}`}>
          <img src={AgrocafeLogo} alt="logo agrocafe" />
        </div>
        <DefaultSection options={options} discriminator={"default"} />
        <MobileSection options={options} discriminator={"mobile"} scrolled={mobileLogoSmaller} />
      </header>
    </>
  );
};

export default Header;
