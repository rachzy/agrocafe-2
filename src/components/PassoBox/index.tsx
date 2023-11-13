import React from "react";
import "./PassoBox.css";

import Titulo from "../Titulo";

export interface IPasso {
  titulo: string;
  descricao: string;
  icone: string;
}

const PassoBox: React.FC<IPasso> = ({ titulo, descricao, icone }) => {
  return (
    <div className="passo-box verde background">
      <img className="passo-icone" src={icone} alt={titulo} />
      <Titulo>{titulo}</Titulo>
      <p>{descricao}</p>
    </div>
  );
};

export default PassoBox;
