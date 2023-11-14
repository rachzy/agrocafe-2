import React from "react";
import "./Service.css";

import Lupa from "../../assets/other/lupa.png";

interface IProps {
  image: string;
  toggleModal: (imageSource: string) => void;
}

const Service: React.FC<IProps> = ({ image, toggleModal }) => {
  return (
    <div className="service">
      <img className="showcase-image" src={image} alt="agrocafe serviço" />
      <div className="hover">
        <img onClick={toggleModal.bind(this, image)} className="expand-image" src={Lupa} alt="agrocafe lupa" />
      </div>
    </div>
  );
};

export default Service;
