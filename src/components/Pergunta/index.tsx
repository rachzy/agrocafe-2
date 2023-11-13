import React from "react";
import "./Pergunta.css";

import { AiOutlineDown } from "react-icons/ai";

export interface IPergunta {
  pergunta: string;
  resposta: string;
}

const Pergunta: React.FC<IPergunta> = ({ pergunta, resposta }) => {
  function handlePerguntaClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.currentTarget.classList.toggle("active");
  }

  return (
    <div onClick={handlePerguntaClick} className="pergunta-box">
      <div className="titulo-box">
        <AiOutlineDown className="arrow-icon" fill="#698434" size={32} />
        <h2 className="marrom label">{pergunta}</h2>
      </div>
      <div className="resposta-box">
        <p>{resposta}</p>
      </div>
    </div>
  );
};

export default Pergunta;
