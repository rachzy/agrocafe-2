import React from "react";
import "./Titulo.css";

interface IProps {
  children: string;
  style?: React.CSSProperties;
}

const Titulo: React.FC<IProps> = ({ style, children }) => {
  return (
    <h1 style={style} className="main-titulo marrom label">
      {children}
    </h1>
  );
};

export default Titulo;
