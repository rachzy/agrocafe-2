import "./Contact.css";

import WhatsAppIcon from "../../assets/imagens/botoes/whatsapp.png";
import TelefoneIcon from "../../assets/imagens/botoes/telefone-fixo.png";
import EmailIcon from "../../assets/imagens/botoes/e-mail.png";
import FacebookIcon from "../../assets/imagens/botoes/facebook.png";
import InstagramIcon from "../../assets/imagens/botoes/instagram.png";
import PointerIcon from "../../assets/imagens/botoes/pointer.png";

import ContactBox from "../../components/ContactBox/index.js";

interface IContact {
  icone: string;
  titulo: string;
  href?: string;
}

const Contact = () => {
  const contacts: IContact[] = [
    {
      icone: WhatsAppIcon,
      titulo: "34 9 9824-1600",
      href: "https://api.whatsapp.com/send?1=pt_BR&phone=5534998241600",
    },
    {
      icone: TelefoneIcon,
      titulo: "34 3831-2996",
    },
    {
      icone: EmailIcon,
      titulo: "agrocafepatrocinio\n@agrocafe.com",
      href: "mailto:agrocafepatrocinio@agrocafe.com",
    },
    {
      icone: FacebookIcon,
      titulo: "agrocafeirrigacao",
      href: "https://www.facebook.com/agrocafeirrigacao",
    },
    {
      icone: InstagramIcon,
      titulo: "agrocafeirrigacao",
      href: "https://www.instagram.com/agrocafeirrigacao",
    },
  ];

  function renderContacts() {
    return contacts.map((contact) => {
      return (
        <ContactBox
          key={contact.icone}
          icone={contact.icone}
          href={contact.href}
        >
          {contact.titulo}
        </ContactBox>
      );
    });
  }
  return (
    <section id="contato">
      <div className="contact-fake-button marrom background">
        <h1>Vamos conversar?</h1>
      </div>
      <h2 className="contact-title contact-label marrom label">
        Escolha como você prefere conversar conosco:
      </h2>
      <div className="contact-wrapper">{renderContacts()}</div>
      <a href={"https://goo.gl/maps/Q8oqnfvg9uC3Epyf9"} target="_blank">
        <div className="local-wrapper">
          <img src={PointerIcon} alt="pointer" />
          <h2 className="contact-label marrom label">
            Av. Faria Pereira, 1611 - Bairro Constantino
            <br />
            Patrocínio - MG, 38747-032
          </h2>
        </div>
      </a>
    </section>
  );
};

export default Contact;
