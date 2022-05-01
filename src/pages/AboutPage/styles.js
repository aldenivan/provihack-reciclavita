import styled from 'styled-components'

export const Container = styled.main`
background-color: #052d53;
height:100vh;
@media (max-width:700px){
height:100%;
width:100vw;
} 
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
@media (max-width:700px){
width:90%;
height:auto;
flex-direction: row;
flex-wrap: wrap;
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
line-height:170%;
h1{
margin-bottom:10px;
}
@media (max-width:700px){
width:90%;
margin-top:20px;
line-height: 120%;
}
`

