import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  background-color: #052d53;
  height: 140px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    text-align: center;

    @media only screen and (max-width: 800px) {
      font-size: 10px;
    }

    & p {
      @media only screen and (max-width: 600px) {
        display: none;
      }
    }
  }

  & > div > figure > img {
    width: 90%;
    background-color: #052d53;

    @media only screen and (min-width: 400px) {
      width: 350px;
    }
  }
`;

export const AppInfo = styled.div`
  width: 100%;
`;

export const InfoList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-size: 0.7rem;
  list-style: none;
  background-color: #052d53;
  margin: 0;

  & > li {
    margin: 5px 10px;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
