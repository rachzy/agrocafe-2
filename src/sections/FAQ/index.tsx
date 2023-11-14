import "./FAQ.css";

import Pergunta, { IPergunta } from "../../components/Pergunta/index.js";
import Title from "../../components/Title/index.js";

const FAQ = () => {
  const perguntas: IPergunta[] = [
    {
      pergunta:
        "É viável economicamente investir na irrigação por gotejamento?",
      resposta: `Sim é viável, pois com a irrigação por gotejamento é possível obter 
      um aumento de produtividade, aumento na longevidade e redução dos custos de produção 
      em reais por tonelada. 
      `,
    },
    {
      pergunta:
        "É possível realizar o controle de pragas com a utilização do sistema de irrigação por gotejamento?",
      resposta: `Sim, podemos utilizar o mesmo sistema de irrigação para a aplicação 
      de produtos de controle de praga. A água enviada aos cultivos por meio do sistema 
      de irrigação por gotejamento pode ser utilizada como meio de transporte para a aplicação 
      de moléculas químicas e biológicas. Para essa utilização é importante respeitar o ciclo 
      biológico da praga, a característica do sistema de gotejamento, e o produtos que vai ser 
      utilizado para o controle dessa praga.
      `,
    },
    {
      pergunta: "Qual a durabilidade do sistema de irrigação por gotejamento?",
      resposta: `Eles têm longa durabilidade. No Brasil temos áreas com gotejadores de mais de 
      20 anos e que ainda tem muito boa performance. A durabilidade dos tubos gotejadores depende 
      muito da realização das operações de manutenção preventiva recomendadas. Da mesma forma que 
      um trator ou outra máquina qualquer, sua durabilidade está vinculada ao seu correto uso e a 
      realização das revisões conforme recomendação do fabricante.
      `,
    },
    {
      pergunta:
        "Como é o funcionamento do sistema de irrigação por gotejamento para grãos e fibras?",
      resposta: `O sistema de irrigação é composto por uma fonte de água, bombeamento, filtragem e os 
      tubos gotejadores. A fonte de água pode ser um rio, um poço ou um reservatório. O bombeamento é 
      feito através de uma tubulação, que faz com que a água seja levada da sua fonte até a área a ser 
      irrigada. A filtragem é responsável pela qualidade da água antes da entrada no sistema. Os modelos 
      de tubos gotejadores, espaçamentos e vazões são definidos de acordo com a cultura e caraterísticas 
      de cada área.`,
    },
    {
      pergunta: "É possível germinar com o sistema de gotejamento subterrâneo?",
      resposta: `Sim, o projeto é dimensionado para que a umidade atinja a semente possibilitando a 
      germinação de maneira uniforme. Com a concepção correta para cada tipo desolo, seguindo os 
      protocolos de preparo e reestruturação do solo, somado ao correto manejo da irrigação, é possível 
      germinar o cultivo em qualquer época do ano. Para adequada germinação, a irrigação deve ser iniciada 
      antes do plantio até que a umidade esteja próxima a superfície do solo.
      `,
    },
    {
      pergunta:
        "O trânsito de máquinas pode danificar ou amassar o tubo gotejador?",
      resposta: `Nas condições normais de utilização dos equipamentos agrícolas, principalmente em um sistema 
      de plantio direto e rotação de cultura não causa efeitos negativos nos tubos gotejadores. A utilização 
      da irrigação durante a safra faz com que os tubos gotejadores mantenham o seu formato original e não 
      sejam compactados pelo peso sobre o solo.
      `,
    },
    {
      pergunta: "Qual a diferença entre o sistema de pivô e por gotejamento?",
      resposta: `O pivô é sistema de irrigação por aspersão composto por uma base, aspersores invertidos, torres 
      e rodados. Esse sistema imita as chuvas, ou seja, a parte da cultura atingida primeiramente são as folhas 
      e não o solo. Para aplicar lâminas maiores é necessário que o pivô ande mais devagar e com isso demore 
      mais tempo para irrigar a área. \nO gotejamento é um sistema de irrigação localizada, composto por gotejadores 
      que levam a água e os nutrientes diretamente na área radicular da cultura, irrigando a planta ao invés de 
      irrigar o solo. O sistema traz como principais benefícios: altíssima eficiência na aplicação da água (95%), 
      possibilidade de aplicar os nutrientes juntos com a água de irrigação (nutrirrigação) e aproveitamento de 
      100% da área. 
      `,
    },
    {
      pergunta: "Quais manutenções devem ser realizadas no sistema?",
      resposta: `As manutenções preventivas são simples e de fácil realização, podem ser realizadas limpezas por 
      arraste, limpando os finais de linha e tubos coletores, assim como limpeza de manutenção química onde são 
      aplicados produtos indicados, como cloro e peróxido de hidrogênio, em pequenas dosagens para auxílio da 
      limpeza da malha hidráulica e tubos gotejadores. 
      `,
    },
    {
      pergunta:
        "Posso utilizar o sistema de irrigação por gotejamento em qualquer tamanho de área?",
      resposta: `O sistema de irrigação por gotejamento pode ser implementado em diferentes tamanhos e formatos 
      de áreas. Isso permite que a tecnologia possa ser utilizada por pequenos, médios e grandes agricultores.
      O projeto de irrigação por gotejamento pode ser planejado para grandes áreas e ser implementado de maneira 
      modular de acordo com a necessidade do cliente.
 
      `,
    },
    {
      pergunta:
        "Preciso de uma equipe de pessoas especializadas para a operação do sistema?",
      resposta: `Para a gestão do sistema de irrigação pode ser utilizado qualquer profissional da fazenda que 
      já está acostumado com as demais operações. O sistema é fácil de operar e um bom treinamento, fornecido 
      pela Agrocafé no final da montagem, habilita o profissional a realizar a operação do sistema. 
      Recomenda-se que sempre haja mais de uma pessoa capacitada para operacionalizar o sistema, podendo uma 
      substituir a outra, sempre que necessário. No processo de limpeza e manutenção será necessário mão de obra 
      adicional como, por exemplo, diaristas.
      `,
    },
  ];

  function renderPerguntas() {
    return perguntas.map((pergunta) => {
      return <Pergunta key={pergunta.pergunta} {...pergunta} />;
    });
  }
  return (
    <section className="faq" id="faq">
      <Title>Perguntas frequentes</Title>
      <div className="perguntas-wrapper">{renderPerguntas()}</div>
    </section>
  );
};

export default FAQ;
