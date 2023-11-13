import "./Descricao.css";

import Gotinhas from "../../assets/imagens/demais-imagens/gotinhas.png";

import CulturaCafe from "../../assets/imagens/culturas/icone-cafe.png";
import CulturaSoja from "../../assets/imagens/culturas/icone-soja.png";
import CulturaPastagens from "../../assets/imagens/culturas/icone-pastagens.png";
import CulturaMilho from "../../assets/imagens/culturas/icone-milho.png";
import CulturaSorgo from "../../assets/imagens/culturas/icone-sorgo.png";
import CulturaFeijao from "../../assets/imagens/culturas/icone-feijao.png";
import CulturaHortifruti from "../../assets/imagens/culturas/icone-hortifruti.png";
import CulturaAlgodao from "../../assets/imagens/culturas/icone-algodao.png";
import CulturaBox from "../../components/CulturaBox";

export interface ICultura {
  icone: string;
  label: string;
}

const Descricao = () => {
  const culturas: ICultura[] = [
    {
      icone: CulturaCafe,
      label: "Café",
    },

    {
      icone: CulturaSoja,
      label: "Soja",
    },
    {
      icone: CulturaPastagens,
      label: "Pastagens",
    },
    {
      icone: CulturaMilho,
      label: "Milho",
    },
    {
      icone: CulturaSorgo,
      label: "Sorgo",
    },
    {
      icone: CulturaFeijao,
      label: "Feijão",
    },
    {
      icone: CulturaHortifruti,
      label: "Hortifruti",
    },
    {
      icone: CulturaAlgodao,
      label: "Algodão",
    },
  ];

  function renderCulturas() {
    return culturas.map((cultura) => {
      return (
        <CulturaBox key={cultura.icone} icone={cultura.icone}>
          {cultura.label}
        </CulturaBox>
      );
    });
  }
  return (
    <section className="desc-section" id="sobre">
      <div className="main-content-wrapper verde background">
        <div className="content">
          <div className="content-wrapper">
            <h1>
              Somos a AgroCafé, uma empresa que atua no agronegócio com mais de
              15 anos de mercado.
            </h1>

            <img src={Gotinhas} alt="gotinhas agrocafe" />
          </div>
          <div className="content-wrapper justify">
            <p>
              Oferecemos inovadores sistemas de irrigação, sem a necessidade de
              expandir a sua propriedade.
            </p>

            <p>
              Assim, você pode atingir altas produtividades, aumentar a
              qualidade do seu cultivo e ainda reduzir, significativamente, o
              uso de insumos e de mão de obra.
            </p>
            <p>
              Uma de nossas unidades está, estrategicamente, localizada em
              Patrocínio/MG. O município é o maior produtor de café do Brasil.
              Essa unidade é revendedora autorizada da Netafim, empresa
              referência internacional em irrigação.
            </p>
            <p>
              Além da cultura do café, atendemos também lavouras brancas e
              pastagens.
            </p>
          </div>
        </div>
      </div>

      <div className="culturas-wrapper marrom background">
        <p>Culturas atendidas:</p>
        <div className="culturas-container">{renderCulturas()}</div>
      </div>
    </section>
  );
};

export default Descricao;
