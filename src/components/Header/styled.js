import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  min-width: 100%;
  background-color: #052d53;
  /* height: 60px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;

  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;
  color: white;

  @media only screen and (min-width: 768px) {
    line-height: 19px;
    height: 60px;
    padding: 0 10px;
    justify-content: space-around;
  }

  img {
    width: 150px;
  }

  .icon-menu {
    width: 40px;

    @media only screen and (min-width: 800px) {
      display: none;
    }
  }

  .lista {
    display: none;
    justify-content: space-between;
    flex-direction: column;
    align-items: left;
    width: 45%;
    list-style: none;

    & > li {
      border-bottom: 2px solid transparent;

      :hover {
        border-bottom: 2px solid #9df;
      }
    }

    a {
      text-decoration: none;
      color: white;
      font-size: 18px;
    }

    @media only screen and (min-width: 800px) {
      flex-direction: row;
      align-items: center;
      display: flex;
    }
  }
`;
