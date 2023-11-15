import React from "react";
import "./ContactBox.css";

interface IProps {
  icone: string;
  href?: string;
  children: string;
  style?: React.CSSProperties;
  flex?: number;
}

const ContactBox: React.FC<IProps> = ({ icone, children, href, style, flex }) => {
  return (
    <a href={href} target="_blank" style={{flex: flex ? flex.toString() : "1"}}>
      <div className="contact-box">
          <img src={icone} />
          <p style={style}>{children}</p>
      </div>
    </a>
  );
};

export default ContactBox;
