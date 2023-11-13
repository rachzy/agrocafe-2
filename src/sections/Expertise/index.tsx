import "./Expertise.css";

import LetreiroExpertise from "../../assets/imagens/expertise/palavra-expetise.png";
import IconeProjetoPreliminar from "../../assets/imagens/expertise/icone-projeto-preliminar.png";
import IconeExecucao from "../../assets/imagens/expertise/icone-execucao.png";
import IconeProjetoDetalhado from "../../assets/imagens/expertise/icone-projeto-talhado.png";
import IconeOperacao from "../../assets/imagens/expertise/icone-operacao.png";

import Titulo from "../../components/Titulo";

import PassoBox, { IPasso } from "../../components/PassoBox";

const Expertise = () => {
  const passos: IPasso[] = [
    {
      titulo: "1) Projeto Preliminar",
      descricao: `O primeiro passo inclui uma detalhada
            avaliação do seu projeto e de sua viabilidade
            financeira. Examinaremos tudo, desde sua
            tecnologia de preferência e necessidade de
            mão de obra, até soluções de financiamento,
            seguro e detalhes legais.`,
      icone: IconeProjetoPreliminar,
    },
    {
      titulo: "2)  Projeto Detalhado",
      descricao: `O próximo passo é desenhar um plano
      geral para o projeto - o fornecimento de
      um sistema de suprimento de água e de
      irrigação localizada, além de demais
      equipamentos. Depois, usaremos nossos
      15 anos de experiência em agronomia e
      engenharia para condensar essas
      ferramentas em uma estratégia sólida
      e definida.`,
      icone: IconeProjetoDetalhado,
    },
    {
      titulo: "3) Execução",
      descricao: `Após o aperfeiçoamento do plano geral, é
      hora de colocá-lo em prática, com
      gerenciamento local e remoto, que inclui
      controle do orçamento e dos recursos
      humanos. Dessa forma, podemos garantir
      que o projeto será entregue como combinado.`,
      icone: IconeExecucao,
    },
    {
      titulo: "4) Operação e Manutenção",
      descricao: `O sucesso do seu projeto dependerá,
      principalmente, da qualidade do apoio
      técnico e agrônomo, e da eficácia da
      capacitação, anos após a sua implementação.
      É por isso que personalizamos e
      aperfeiçoamos nossos serviços nesta
      etapa, da mesma forma que as anteriores,
      para garantirmos um ótimo retorno sobre
      o seu investimento`,
      icone: IconeOperacao,
    },
  ];

  function renderPassos(indexes: number[]) {
    return passos.map((passo, index) => {
      if (!indexes.includes(index)) return null;
      return <PassoBox key={passo.titulo} {...passo} />;
    });
  }

  return (
    <section className="expertise-section" id="expertise">
      <img
        className="expertise-banner"
        src={LetreiroExpertise}
        alt="expertise agrocafe"
      />
      <Titulo>em projetos de ponta a ponta</Titulo>
      <div className="expertise-passos-wrapper">{renderPassos([0, 2])}</div>
      <div className="expertise-passos-wrapper">{renderPassos([1, 3])}</div>
      <div className="expertise-passos-wrapper mobile">
        {renderPassos([0, 1, 2, 3])}
      </div>
    </section>
  );
};

export default Expertise;
