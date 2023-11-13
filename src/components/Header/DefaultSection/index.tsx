import { IPropsSections } from "..";

import Gota from "../../../assets/other/gotinha-menu.png";
import Logo from "../../../assets/logos/agrocafe.png";

const DefaultSection: React.FC<IPropsSections> = ({ options }) => {
  function handleLogoClick() {
    window.scrollTo(0, 0);
  }

  function renderOptions() {
    return options.map((link) => {
      return (
        <>
          <li key={link.label}>
            <a className="menu-option" href={link.href}>
              {link.label}
            </a>
            <img src={Gota} />
          </li>
        </>
      );
    });
  }

  return (
    <div className="default">
      <div className="menu">
        <div className="menu-content">
          <div className="wrapper-logo">
            <img onClick={handleLogoClick} src={Logo} alt="logo agrocafe" />
          </div>
          <div className="wrapper-menu">
            <nav>
              <ul className="options">{renderOptions()}</ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultSection;