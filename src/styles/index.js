import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline: 0;
    }
    :root{
        --color-primary:#3FE864
        --color-secondary:#3CB371
        --color-button:#20B2AA;
        font-family: 'Inter', serif;
    }
    button{
        cursor:pointer;
    }
    a{
        text-decoration:none;
    }
`;
