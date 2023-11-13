import "./Projetos.css";

import Titulo from "../../components/Titulo";

import Imagem1 from "../../assets/imagens/demais-imagens/imagem1.png";
import Imagem2 from "../../assets/imagens/demais-imagens/imagem2.png";
import Imagem3 from "../../assets/imagens/demais-imagens/imagem3.png";
import Imagem4 from "../../assets/imagens/demais-imagens/imagem4.png";
import Imagem5 from "../../assets/imagens/demais-imagens/imagem5.png";
import Imagem6 from "../../assets/imagens/demais-imagens/imagem6.png";
import Imagem7 from "../../assets/imagens/demais-imagens/imagem7.png";
import Imagem8 from "../../assets/imagens/demais-imagens/imagem8.png";
import Imagem9 from "../../assets/imagens/demais-imagens/imagem9.png";

const Projetos = () => {
  return (
    <section id="fotos">
      <Titulo>Alguns dos nossos projetos</Titulo>
      <div id="containerProjects">
        <img className="img1" src={Imagem1} alt="" />
        <img className="img2" src={Imagem2} alt="" />
        <img className="img3" src={Imagem3} alt="" />
        <img className="img4" src={Imagem4} alt="" />
        <img className="img5" src={Imagem5} alt="" />
        <img className="img6" src={Imagem6} alt="" />
        <img className="img7" src={Imagem7} alt="" />
        <img className="img8" src={Imagem8} alt="" />
        <img className="img9" src={Imagem9} alt="" />
      </div>
    </section>
  );
};

export default Projetos;
