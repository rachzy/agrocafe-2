import React, { MutableRefObject, useRef } from "react";
import { IPropsSections } from "..";

import "../Header-Mobile.css";

import Logo from "../../../assets/logos/agrocafe.png";

import Hamburguer from "../../Hamburguer";

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
    return options.map((link) => {
      return (
        <>
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
        <div className="mobile-menu">
          <img src={Logo} onClick={handleOptionClick} alt="logo agrocafe" />
          <nav className="options">
            <ul className="options-list">{renderOptions()}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
