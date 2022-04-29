import styled from "styled-components";

export const Main = styled.main`
  background-color: #f5f5f5;
`;

export const VideoDiv = styled.video`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  box-shadow: 2px 31px 41px -21px rgba(129, 138, 129, 0.75);
  -webkit-box-shadow: 2px 31px 41px -21px rgba(129, 138, 129, 0.75);
  -moz-box-shadow: 2px 31px 41px -21px rgba(129, 138, 129, 0.75);
`;

export const Title = styled.h1`
  text-align: center;
  margin: 10px 0;
  font-size: 2rem;
  
  @media only screen and (min-width: 1440px) {
    font-size: 2.5rem;
`;

export const Section = styled.section`
  width: 100%;
  text-align: center; ;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;

  & > figure > img {
    width: 90vw;
    border-radius: 10px;
    box-shadow: 0px 0px 41px 4px rgba(125, 181, 139, 0.75);
    -webkit-box-shadow: 0px 0px 41px 4px rgba(125, 181, 139, 0.75);
    -moz-box-shadow: 0px 0px 41px 4px rgba(125, 181, 139, 0.75);

    @media only screen and (min-width: 768px) {
      width: 45vw;
      border-radius: 20px;
    }
  }

  & > article {
    font-size: 1.3rem;

    @media only screen and (min-width: 768px) {
      padding: 20px;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 2rem;
    }
    @media only screen and (min-width: 1600px) {
      font-size: 2.5rem;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Text = styled.p`
  text-align: center;
  width: 90%;
  margin: 20px auto;
`;
