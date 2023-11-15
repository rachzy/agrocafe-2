import { useState } from "react";

import Descricao from "./sections/Descricao";
import FAQ from "./sections/FAQ";
import Expertise from "./sections/Expertise";
import Numeros from "./sections/Numeros";
import Aspas from "./sections/Aspas";
import Projects from "./sections/Projects";
import Services from "./sections/Services";

import Modal from "./components/Modal";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

import Slide1 from "./assets/sliders/imagem1.jpg";
import Slide2 from "./assets/sliders/imagem2.jpg";
import Slide3 from "./assets/sliders/imagem3.jpg";

import Background from "./assets/scrolling/bg-frase.jpg";

export interface IModal {
  imageSource: string | null;
  active: boolean;
}

const App = () => {
  const slides = [Slide1, Slide2, Slide3];
  const [modal, setModal] = useState<IModal>({
    active: false,
    imageSource: null,
  });

  function toggleModal(imageSource: string | null) {
    setModal(() => {
      const newModal: IModal = {
        imageSource: imageSource,
        active: imageSource ? true : false,
      };
      return newModal;
    });
  }

  return (
    <main>
      <Modal modal={modal} setActive={toggleModal.bind(this, null)} />
      <Header />
      <Slider images={slides} floatingDots />
      <Descricao />
      <Numeros />
      <Aspas quotesColor="Blue">
        Em parceria com a Netafim e a Syngenta, atendemos o produtor em todos os
        segmentos da agricultura: consultorias, produtos, irrigação,
        assistências e pulverização, via drone.
      </Aspas>
      <Expertise />
      <Projects />
      <Services toggleModal={toggleModal} />
      <FAQ />
      <Aspas quotesColor="White" backgroundImage={Background}>
        Queremos te ajudar a produzir mais com menos. <br />
        Fale com a nossa equipe e conheça mais!
      </Aspas>
      <Footer />
    </main>
  );
};

export default App;
