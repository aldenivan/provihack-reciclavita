import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  min-width: 100%;
  background-color: #052d53;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;

  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: white;

  img {
    width: 150px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45%;

    a {
      text-decoration: none;
      color: white;
      font-size: 18px;
    }
  }
`;
