import React from 'react'
import "./Title.css";

interface IProps {
    children: string;
}

const Title: React.FC<IProps> = ({children}) => {
  return (
    <h1 className="main-title">{children}</h1>
  )
}

export default Title