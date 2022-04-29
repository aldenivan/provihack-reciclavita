import Header from "../../components/Header";
import backVideo from "../../assets/video/videoHome.mp4";
import { Section, Title, VideoDiv, Div, Main, Text } from "./styles";
import ImageHome from "../../assets/image/imgHome.png";

const HomePage = () => {
  return (
    <>
      <Main>
        <Header />
        <VideoDiv autoPlay loop muted id="video">
          <source src={backVideo} type="video/mp4" />
        </VideoDiv>
        <Section>
          <Title>Porque Reciclar o seu Lixo?</Title>
          <Div>
            <figure>
              <img src={ImageHome} alt="recicle" />
              <figcaption style={{ display: "none" }}>
                Imagem com um símbolo em verde de reciclagem de lixo.
              </figcaption>
            </figure>
            <article>
              <Text>
                “Separando corretamente os lixos, economizamos recursos
                naturais, água e energia; reduzimos a disposição inadequada dos
                resíduos e aumentamos a vida útil do aterro sanitário para onde
                são destinados os resíduos gerais coletados em nossa cidade
                hoje”
              </Text>
            </article>
          </Div>
          <button>BOTAO</button>
        </Section>
      </Main>
    </>
  );
};
export default HomePage;
