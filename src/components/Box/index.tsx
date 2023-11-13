import React from 'react'
import "./Box.css";

interface IProps {
    title: string;
    className: "blue" | "yellow" | "green";
    children: React.ReactNode;
}

const Box: React.FC<IProps> = ({title, className, children}) => {
  return (
    <div className={`box ${className}`}>
        <h3>{title}:</h3>
        {children}
    </div>
  )
}

export default Box