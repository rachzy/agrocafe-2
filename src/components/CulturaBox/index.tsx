import React from "react";
import "./CulturaBox.css";

interface IProps {
  icone: string;
  children: string;
}

const CulturaBox: React.FC<IProps> = ({ icone, children }) => {
  return (
    <div className="cultura-box">
      <img src={icone} alt={children} />
      <p>{children}</p>
    </div>
  );
};

export default CulturaBox;
