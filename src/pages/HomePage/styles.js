import styled from "styled-components";

export const Main = styled.main`
  background-color: #052d53;

  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const Title = styled.h1`
  text-align: left;
  margin: 30px;
  font-size: 1.5rem;

  @media only screen and (min-width: 768px) {
    margin: 30px 0;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 2.5rem;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0 30px;
  box-sizing: border-box;

  @media only screen and (min-width: 1024px) {
    align-items: flex-end;
  }

  & > figure > img {
    width: 90vw;
    border-radius: 10px;

    @media only screen and (min-width: 768px) {
      width: 45vw;
      margin: 20px 40px 0 20px;
      border-radius: 20px;
      align-items: flex-end;
    }
  }

  & > article {
    margin: 10px;
    font-size: 1.3rem;
    background-color: #f5f5f5;
    /* text-align: center; */

    @media only screen and (min-width: 768px) {
      margin: 0 20px 10px 0;
      padding: 20px;
    }

    @media only screen and (min-width: 1440px) {
      padding: 50px 30px 40px 70px;
      font-size: 1.3rem;
    }
    @media only screen and (min-width: 1600px) {
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Text = styled.p`
  text-align: justify;
  width: 80%;
  margin: 20px auto;

  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 20px 0;
  }
`;

export const InfoDiv = styled(Div)`
  background-color: #fff;
  padding: 20px;
  flex-direction: column;
  justify-content: center;

  &>h1 {
    font-size: 1.77rem;
    text-align: center;
    margin: 10px 0;
  }

  @media only screen and (min-width: 1024px) {
    align-items: center;
    
  }

`;


export const Container = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
  }

 
`;


export const PostsDiv = styled.div`  
  &>h2 {
    color: #7C3DCB;
    text-align: left;
    margin: 20px 0;
  }

  @media only screen and (min-width: 768px) {
    max-width: 40%;
    flex: content;
  }

  @media only screen and (min-width: 1024px) {
    /* max-width: 50%; */
  }

`;

export const DisposalDiv = styled(PostsDiv)`
  &>h2{
    color: #3758C5; 
  }
`;


export const Question = styled.div`
  font-weight: 700;
  font-size: 1.0rem;
  margin: 10px 0;
  padding: 10px 0;
  border-top: 1px solid #7C3DCB;
  :hover{
    cursor: pointer;
  }
`;


export const Answer = styled.div`
  font-size: 1.0rem;

`;