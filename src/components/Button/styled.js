import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  border: none;
  background: #98c1d9;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid transparent;
  margin: 15px auto;
  padding: 0 30px;
  /* box-shadow: 5px 5px #73b3d9; */
  //   transition: 0.5s;
  :hover {
    /* cursor: pointer; */
    /* box-shadow: 1px 3px #73b3d9; */
    box-shadow: 0px 0px 20px -6px rgba(5, 45, 83, 0.75);
    -webkit-box-shadow: 0px 0px 20px -6px rgba(5, 45, 83, 0.75);
    -moz-box-shadow: 0px 0px 20px -6px rgba(5, 45, 83, 0.75);
  }
  background-color: #052d53;
  color: white;

  @media only screen and (min-width: 768px) {
    margin: 15px 0;
  }
`;
