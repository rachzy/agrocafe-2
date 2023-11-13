import React, { MutableRefObject, useRef } from "react";

import "./Header.css";
import "./Header-Mobile.css";

import Hamburguer from "../Hamburguer";

import Gota from "../../assets/imagens/demais-imagens/gota.png";
import Logo from "../../assets/imagens/logos/logo-agrocafe-cabeçalho.png";
import LogoMobile from "../../assets/imagens/logos/logo-agrocafe-mobile.png";
import Netafim from "../../assets/imagens/logos/logo-netafim-cabeçalho.png";
import NetafimMobile from "../../assets/imagens/logos/logo-netafim-mobile.png";

interface IOptions {
  label: string;
  href?: string;
}
[];

interface IPropsSections {
  options: IOptions[];
}

const DefaultSection: React.FC<IPropsSections> = ({ options }) => {
  function handleLogoClick() {
    window.scrollTo(0, 0);
  }

  function renderOptions() {
    return options.map((link, index) => {
      return (
        <>
          {index > 0 && <img key={index} src={Gota} alt="gota verde" />}
          <li key={link.label}>
            <a className="menu-option" href={link.href}>
              {link.label}
            </a>
          </li>
        </>
      );
    });
  }

  return (
    <div className="default">
      <div className="menu marrom background">
        <div className="menu-content">
          <div className="wrapper-logo">
            <img onClick={handleLogoClick} src={Logo} alt="logo agrocafe" />
          </div>
          <div className="wrapper-menu">
            <nav>
              <ul className="options">{renderOptions()}</ul>
            </nav>
          </div>
          <div className="wrapper-side">
            <a href={"https://www.netafim.com.br/"} target="_blank">
              <div className="logo-container verde background">
                <img src={Netafim} alt="logo netafim" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileSection: React.FC<IPropsSections> = ({ options }) => {
  const menuRef = useRef() as MutableRefObject<HTMLDivElement>;

  function handleHamburguerClick() {
    menuRef.current.classList.toggle("active");
  }

  function handleOptionClick() {
    const hamburguerMobile = document.querySelector(
      "#hamburguer-menu-mobile"
    ) as HTMLButtonElement;
    hamburguerMobile.click();
    window.scrollTo(0, 0);
  }

  function renderOptions() {
    return options.map((link, index) => {
      return (
        <>
        {index !== 0 && <img src={Gota} alt="gota" />}
        <li key={link.label} onClick={handleOptionClick}>
          <a className="verde label" href={link.href}>
            {link.label}
          </a>
        </li>
        </>
      );
    });
  }

  function handleMobileBarClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (!e.target.toString().includes("DivElement")) return;
    window.scrollTo(0, 0);
  }

  return (
    <div className="mobile" onClick={handleMobileBarClick}>
      <Hamburguer
        id={"hamburguer-menu-mobile"}
        onClick={handleHamburguerClick}
      />
      <div className="mobile-background" ref={menuRef}>
        <div className="mobile-menu marrom background">
          <img src={Logo} onClick={handleOptionClick} alt="logo rede cabral" />
          <nav className="options">
            <ul className="options-list">{renderOptions()}</ul>
          </nav>
          <img className="logo-netafim" src={NetafimMobile} alt="logo netafim" />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const options: IOptions[] = [
    {
      label: "Sobre Nós",
      href: "#sobre",
    },
    {
      label: "Expertise",
      href: "#expertise",
    },
    {
      label: "Fotos do Projeto",
      href: "#fotos",
    },
    {
      label: "Perguntas e Respostas",
      href: "#faq",
    },
    {
      label: "Fale Conosco",
      href: "#contato",
    },
  ];

  return (
    <>
      <header>
        <DefaultSection options={options} />
        <MobileSection options={options} />
      </header>
      <div className="fake-header">
        <img src={LogoMobile} alt="logo rede cabral" />
      </div>
    </>
  );
};

export default Header;
