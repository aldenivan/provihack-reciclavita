import Header from "../../components/Header";

import { Title, Div, Main, Text } from "./styles";
import ImageHome from "../../assets/image/imgHome.png";
import Button from "../../components/Button/button";

const HomePage = () => {
  return (
    <>
      <Main>
        <Header />
        <Div>
          <article>
            <Title>Por que Reciclar o seu Lixo?</Title>
            <Text>
              “Separando corretamente os lixos, economizamos recursos naturais,
              água e energia; reduzimos a disposição inadequada dos resíduos e
              aumentamos a vida útil do aterro sanitário para onde são
              destinados os resíduos gerais coletados em nossa cidade hoje”
            </Text>
            <Button callback={""}>Saiba onde descartar</Button>
          </article>
          <figure>
            <img src={ImageHome} alt="recicle" />
            <figcaption style={{ display: "none" }}>
              Imagem com um símbolo em verde de reciclagem de lixo.
            </figcaption>
          </figure>
        </Div>
      </Main>
    </>
  );
};
export default HomePage;
