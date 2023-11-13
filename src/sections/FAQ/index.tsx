
import "./FAQ.css";

import Titulo from "../../components/Titulo";
import Pergunta, { IPergunta } from "../../components/Pergunta/index.js";

const FAQ = () => {
  const perguntas: IPergunta[] = [
    {
      pergunta: "Mesmo em períodos de chuva devo irrigar?",
      resposta: `O fato do solo estar com grande quantidade de água, 
      devido às chuvas, não significa que a plantação esteja sadia e 
      produtiva. Com o grande volume de água, pode ocorrer lixiviação 
      (perda dos nutrientes pela água), que prejudica a produtividade 
      e gera perdas de fertilizantes aplicados na cultura. O interessante 
      da irrigação por gotejamento, mesmo em período de chuvas, é uma 
      excelente alternativa para aplicação de defensivos agrícolas e 
      nutrientes, a fim de controlar o surgimento de pragas e doenças 
      sem o risco de contaminação da área e do produtor. Assim, garante 
      a segurança da lavoura e fornece, exatamente, o que as plantas 
      precisam para o crescimento e o desenvolvimento.`,
    },
    {
      pergunta: "Qual a durabilidade do sistema de irrigação por gotejamento?",
      resposta: `O sistema de irrigação por gotejamento tem longa 
        durabilidade. No Brasil, temos áreas com gotejadores de mais de 
        20 anos e que ainda tem boa performance. A durabilidade dos tubos 
        gotejadores depende muito da realização das operações de manutenção, 
        preventivas, recomendadas. Da mesma forma que um trator ou outra 
        máquina qualquer, sua durabilidade está vinculada ao seu correto uso 
        e a realização das revisões, conforme recomendação do fabricante.`,
    },
    {
      pergunta: "Se não houver manutenção, os gotejadores entopem ou não?",
      resposta: `Além da manutenção, utilizar produtos de qualidade também é essencial. 
        E, por falar em produtos de qualidade, somos representantes Netafim e atendemos 
        Patrocínio e região. Disponibilizamos uma equipe especializada para assumir toda 
        a operação e a manutenção preventiva do seu sistema. Nós cuidamos da sua irrigação, 
        para que você tenha tranquilidade para focar no seu negócio, que é produzir mais com 
        menos!`,
    },
    {
      pergunta: "É possível fazer quimigação com a irrigação por gotejamento?",
      resposta: `Sim, é possível fazer a aplicação de defensivos agrícolas, produtos biológicos 
        ou orgânicos através da tecnologia chamada de “Drip Protection”. No entanto, é necessário 
        que o produto seja registrado em órgãos que regularizam sua utilização para a cultura e a 
        sua utilização via sistema, ser solúvel em água e não conter partículas sólidas em suspensão. 
        A ”Drip Protection” ou quimigação garante melhor uniformidade, redução de custos, segurança 
        de aplicação e agilidade.`,
    },
    {
      pergunta: "Posso irrigar em áreas com declitividade?",
      resposta: `Sim, o sistema pode ser utilizado tanto em áreas planas quanto naquelas que têm 
        declividade, obtendo o mesmo nível de eficiência! Para realização do projeto executivo, é 
        necessário que a nossa equipe faça um levantamento planialtimétrico que orienta o projetista 
        no correto dimensionamento hidráulico. Vale ressaltar que, mesmo em terrenos com declividade,
        a distribuição da água será uniforme em toda a área irrigada..`,
    },
    {
      pergunta: "Posso irrigar utilizando diferentes fontes de água?",
      resposta: `Um sistema de irrigação por gotejamento, diferente de outros métodos, é dimensionado 
        baseando-se na qualidade da água disponível para irrigação, podendo utilizar diferentes fontes 
        de água (rio, poços e reservatórios). Dessa forma, utilizam-se sistemas de tratamento da água 
        antes que ela passe pelos tubos gotejadores. Sistemas de aeração, reservatório com decantação 
        e filtragem são exemplos de processos realizados antes da irrigação para que se garanta a 
        qualidade da água a ser utilizada. Além disso, os gotejadores também possuem um sistema de 
        filtros que evitam os riscos de entupimento. Para complementar, é importante que seja feito um 
        programa de manutenção preventiva, garantindo a limpeza dos tubos gotejadores com frequência.`,
    },
  ];

  function renderPerguntas() {
    return perguntas.map((pergunta) => {
      return <Pergunta key={pergunta.pergunta} {...pergunta} />;
    });
  }
  return (
    <section className="faq" id="faq">
      <Titulo>Perguntas e respostas frequentes</Titulo>
      <div className="perguntas-wrapper">{renderPerguntas()}</div>
    </section>
  );
};

export default FAQ;
