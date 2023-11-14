import React from 'react'
import Title from '../../components/Title'

import "./Services.css";

import Service1 from "../../assets/photos/1.jpg";
import Service2 from "../../assets/photos/2.jpg";
import Service3 from "../../assets/photos/3.jpg";
import Service4 from "../../assets/photos/4.jpg";
import Service5 from "../../assets/photos/5.jpg";
import Service6 from "../../assets/photos/6.jpg";
import Service7 from "../../assets/photos/7.jpg";
import Service8 from "../../assets/photos/8.jpg";
import Service from '../../components/Service';

interface IProps {
  toggleModal: (imageSource: string) => void;
}

const Services: React.FC<IProps> = ({toggleModal}) => {
    const services = [Service1, Service2, Service3, Service4, Service5, Service6, Service7, Service8];

    function renderServices(): React.ReactNode {
      return services.map((service) => {
        return <Service image={service} toggleModal={toggleModal} />
      })
    }
  return (
    <section className="services-section">
      <div className="content">
        <Title>Alguns dos nossos serviços e projetos</Title>
        <div className="servicos-container">
          {renderServices()}
        </div>
        <button>Ver mais <span>+</span></button>
      </div>
    </section>
  )
}

export default Services