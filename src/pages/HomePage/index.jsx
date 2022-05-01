import Header from "../../components/Header";

import {
  Title,
  Div,
  Main,
  Text,
  InfoDiv,
  Container,
  PostsDiv,
  Question,
  Answer,
  DisposalDiv,
} from "./styles";
import ImageHome from "../../assets/image/imgHome.png";
import ButtonDefault from "../../components/Button/button";
import { Fragment, useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const HomePage = () => {
  const points = [
    {
      question: "Como eu posso fazer a localização dos postos?",
      answer:
        "A tempor donec eleifend et arcu felis ullamcorper purus. Quis ut odio felis, elementum aliquam consectetur facilisis feugiat.",
    },
    {
      question: "Como eu posso fazer a localização dos postos?",
      answer:
        "A tempor donec eleifend et arcu felis ullamcorper purus. Quis ut odio felis, elementum aliquam consectetur facilisis feugiat.",
    },
    {
      question: "Como eu posso fazer a localização dos postos?",
      answer:
        "A tempor donec eleifend et arcu felis ullamcorper purus. Quis ut odio felis, elementum aliquam consectetur facilisis feugiat.",
    },
    {
      question: "Como eu posso fazer a localização dos postos?",
      answer:
        "A tempor donec eleifend et arcu felis ullamcorper purus. Quis ut odio felis, elementum aliquam consectetur facilisis feugiat.",
    },
  ];

  const disposal = [
    {
      question: "Como posso estar realizando o descarte correto?",
      answer:
        "A tempor donec eleifend et arcu felis ullamcorper purus. Quis ut odio felis, elementum aliquam consectetur facilisis feugiat.",
    },
    {
      question: "Como posso estar realizando o descarte correto?",
      answer:
        "A tempor donec eleifend et arcu felis ullamcorper purus. Quis ut odio felis, elementum aliquam consectetur facilisis feugiat.",
    },
    {
      question: "Como posso estar realizando o descarte correto?",
      answer:
        "A tempor donec eleifend et arcu felis ullamcorper purus. Quis ut odio felis, elementum aliquam consectetur facilisis feugiat.",
    },
    {
      question: "Como posso estar realizando o descarte correto?",
      answer:
        "A tempor donec eleifend et arcu felis ullamcorper purus. Quis ut odio felis, elementum aliquam consectetur facilisis feugiat.",
    },
    {
      question: "Como posso estar realizando o descarte correto?",
      answer:
        "A tempor donec eleifend et arcu felis ullamcorper purus. Quis ut odio felis, elementum aliquam consectetur facilisis feugiat.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [toOpen, setToOpen] = useState(null);
  const [toOpenDisposal, setToOpenDisposal] = useState(null);
  const [isDisposalOpen, setIsDisposalOpen] = useState(false)

  const openPostsAnswer = (e) => {
    setIsOpen(!isOpen);
    setToOpen(e);
  };

  const openDisposalAnswer = (e) => {
    setIsDisposalOpen(!isDisposalOpen);
    setToOpenDisposal(e);
  };

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
            <ButtonDefault callback={() => null}>
              Saiba onde descartar
            </ButtonDefault>
          </article>
          <figure>
            <img src={ImageHome} alt="recicle" />
            <figcaption style={{ display: "none" }}>
              Imagem com um símbolo em verde de reciclagem de lixo.
            </figcaption>
          </figure>
        </Div>
        <InfoDiv>
          <h1>Dúvidas Frequentes</h1>
          <Container>
            <PostsDiv>
              <h2>Postos de coleta</h2>
              {points.map((question, index) => (
                <Fragment key={index}>
                  <Question onClick={(e) => openPostsAnswer(index)}>
                    {question.question}
                    <p>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
                  </Question>
                  {isOpen && toOpen === index ? (
                    <Answer>{question.answer}</Answer>
                  ) : (
                    <Answer></Answer>
                  )}
                </Fragment>
              ))}
            </PostsDiv>
            <DisposalDiv>
              <h2>Descarte Correto</h2>
              {disposal.map((question, index) => (
                <Fragment key={index}>
                  <Question onClick={() => openDisposalAnswer(index)}>
                    {question.question}
                    <p>{isDisposalOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
                  </Question>
                  {isDisposalOpen && toOpenDisposal === index ? (
                    <Answer>{question.answer}</Answer>
                  ) : (
                    <Answer></Answer>
                  )}
                </Fragment>
              ))}
            </DisposalDiv>
          </Container>
        </InfoDiv>
      </Main>
    </>
  );
};
export default HomePage;
