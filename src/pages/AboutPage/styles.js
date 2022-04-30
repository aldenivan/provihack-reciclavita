import styled from 'styled-components'

export const Container = styled.main`
background-color: #052d53;
height:100vh;   
` 
export const BoxContent = styled.div`
display:flex;
align-items: center;
justify-content:space-between;
width:80%;
margin:30px auto;
height:400px;
    ul{
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        height: 100%;
    }
`
export const BoxAboutApp = styled.div`
background-color:green;
width:450px;    
height:400px;
display:flex;
padding: 20px;
align-items: center;
justify-content: center;
flex-direction:column;
border-radius:10% 0;
color:white;
text-align:justify;
line-height:2.0;

`
