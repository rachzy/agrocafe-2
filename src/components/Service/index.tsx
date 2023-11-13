import React from 'react'
import "./Service.css";

import Lupa from "../../assets/other/lupa.png";

interface IProps {
    image: string;
}

const Service: React.FC<IProps> = ({image}) => {
  return (
    <div className="service">
        <img className="showcase-image" src={image} alt="agrocafe serviço" />
        <img className="expand-image" src={Lupa} alt="agrocafe lupa" />
    </div>
  )
}

export default Service