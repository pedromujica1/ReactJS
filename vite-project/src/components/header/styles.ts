//Instalar Extensão styled-components-snippets
//INSTALAR EXTENSÃO VSCODE STYLED COMPONENTS
import { styled } from "styled-components";

//Variável Container
export const Container = styled.header`
    background-color: red;
    align-items: center;
    justify-content: center;
    height: 198px;
    display: flex;
         
`;

//Variável Content
export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .details{
        h1{
            font-size:32px;
            color:#fff;
        }
        h2{
            font-size:16px;
            color:#fff;
            font-weight:400;
            opacity: 0.9;
            margin-top:6px;
        }
    }

    `