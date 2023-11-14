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
          <img src={icone} />
          <p>{children}</p>
      </div>
    </a>
  );
};

export default ContactBox;
