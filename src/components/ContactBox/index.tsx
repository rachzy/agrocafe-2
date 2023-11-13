import React from "react";
import "./ContactBox.css";

interface IProps {
  icone: string;
  href?: string;
  children: string;
}

const ContactBox: React.FC<IProps> = ({ icone, children, href }) => {
  return (
    <a href={href} target="_blank">
      <div className="contact-box verde background">
        <div className="logo-box">
          <img src={icone} />
        </div>
        <div className="text-box">
          <p>{children}</p>
        </div>
      </div>
    </a>
  );
};

export default ContactBox;
