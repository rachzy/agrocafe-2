import React, { useState } from "react";
import "./Projects.css";

import Project from "../../components/Project";

export interface IProject {
  title: string;
  description: string;
  previewText: string;
  active: boolean;
}
[];

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([
    {
      title: "Projeto Preliminar",
      previewText: "A nossa equipe realiza uma avaliação...",
      description: `A nossa equipe realiza uma avaliação detalhada da área 
        baseada no tipo de cultura. Dessa forma, é possível definir o material 
        adequado, o melhor aproveitamento da água, o dimensionamento da malha 
        hidráulica, e assim, projetar um sistema de irrigação que atenda a cultura 
        todo o ano com sustentabilidade e eficiência. Além disso, atendemos o 
        cliente com a melhor condição financeira, negociando e oferendo opções 
        de barter e financiamentos com parceiros.`,
      active: false,
    },
    {
      title: "Execução",
      previewText: "A logística da execução consiste em dar iníc...",
      description: `A logística da execução consiste em dar início às montagens, 
      para isso, o material é entregue na fazenda pela nossa equipe e o coordenador 
      de montagem começa o processo de instalação, além disso, a AgroCafé conta com 
      um consultor de qualidade que realiza visitas periódicas à fazenda, averiguando 
      a montagem e dando suporte. Dessa forma, garantindo um sistema de irrigação de 
      qualidade.
      `,
      active: false,
    },
    {
      title: "Detalhamento",
      previewText: "O detalhamento consiste em colocar em...",
      description: `O detalhamento consiste em colocar em pratica o projeto 
      preliminar, aperfeiçoando-o para atender o produtor em tempo hábil. Nessa 
      etapa é definida a lista de peças final, é realizado a compra/ separação do 
      material e o agendamento da montagem, sempre respeitando a necessidade da fazenda 
      e do produtor.
      `,
      active: false,
    },
    {
      title: "Operação",
      previewText: "Este é o momento de colocar em prática e...",
      description: `Este é o momento de colocar em prática e começar a irrigar o 
      cultivo. O processo consiste em coletar dados de pressão, vazão e anotações 
      importantes do sistema no momento do funcionamento, para que o produtor sempre 
      tenha em mãos parâmetros essenciais do projeto. Além disso, é feita a entrega 
      técnica e agronômica, que é basicamente realizar o treinamento da equipe da fazenda 
      e fornecer instruções para uso adequado do sistema implanto. Disse maneira, garantir 
      o bom funcionamento e a melhor eficácia.
      `,
      active: false,
    },
  ]);

  function handleProjectClick(title: string) {
    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.title !== title) return project;
        return {
          ...project,
          active: !project.active,
        };
      });
    });
  }

  function renderProjects(): React.ReactNode {
    return projects.map((project) => {
      return (
        <Project
          key={project.title}
          project={project}
          onClick={handleProjectClick}
        />
      );
    });
  }
  return (
    <section className="projects-section">
      <div className="content">{renderProjects()}</div>
    </section>
  );
};

export default Projects;
