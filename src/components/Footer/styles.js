import  styled  from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  background-color: #052d53;
  height: 140px;

`;


export const AppInfo = styled.div`
  width: 100%;

`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;
  list-style: none;
   background-color: #052d53;

  &>li {
    margin: 0 10px;
    
  }
`