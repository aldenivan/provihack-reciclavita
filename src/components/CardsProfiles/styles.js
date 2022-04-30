import styled from 'styled-components'

export const ProfilesStyled = styled.li`
display: flex;
align-items:center;

color:white;
    img{
        width:50px;
        height:50px;
        border-radius:16px 0 16px 0;
        margin-right: 10px;
    }
    a{
        color:white;
        margin-right:10px;
        cursor:pointer;
    }
   span{
       display :flex;
   }
   span p{
       margin-left: 10px;
   }
`