import Header from "./components/Header";
import Slider from "./components/Slider";
import Descricao from "./sections/Descricao";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

import Slide1 from "./assets/sliders/imagem1.jpg";
import Slide2 from "./assets/sliders/imagem2.jpg";
import Slide3 from "./assets/sliders/imagem3.jpg";
import Expertise from "./sections/Expertise";
import ScrollBanner from "./sections/ScrollBanner";

import Banner1 from "./assets/imagens/imagens-scroll/imagem1.png";
import Slogan1 from "./assets/imagens/imagens-scroll/texto1.png";

import Banner2 from "./assets/imagens/imagens-scroll/imagem2.png";
import Slogan2 from "./assets/imagens/imagens-scroll/texto2.png";
import Projetos from "./sections/Projetos";

const App = () => {
  const slides = [Slide1, Slide2, Slide3];

  return (
    <main>
      <Header />
      <Slider images={slides} floatingDots />
      <Descricao />
      <Expertise />
      <ScrollBanner banner={Banner1} slogan={Slogan1} />
      <Projetos />
      <FAQ />
      <ScrollBanner banner={Banner2} slogan={Slogan2} />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
