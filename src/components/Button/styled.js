import styled from "styled-components";

export const Button = styled.button`
  height: 50px;
  border-radius: 5px;
  border: none;
  background: #98c1d9;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid transparent;
  margin: 15px 0;
  box-shadow: 5px 5px #73b3d9;
  //   transition: 0.5s;
  :hover {
    cursor: pointer;
    box-shadow: 1px 3px #73b3d9;
  }
  background-color: #052d53;
  color: white;
`;
