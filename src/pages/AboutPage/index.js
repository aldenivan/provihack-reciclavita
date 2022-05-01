import React from 'react'
import Header from '../../components/Header'
import {BoxContent, BoxAboutApp, Container} from './styles'
import CardsProfiles from '../../components/CardsProfiles'

const AboutPage = () => {   
    return (
        <Container>
            <Header/> 
       
            <BoxContent>      
                <ul>
                    <CardsProfiles/>
                    
                </ul>
                <BoxAboutApp>
                    <h1> Sobre o App </h1> 
                    <p>A reciclavita surgiu em maio de 2022 a fim de contribuir ativamente com o aumento da 
                        reciclagem consciente, apos um levantamento feito, foi apontado que o motivo maior 
                        das pessoas em não reciclarem seus materiais, seria por falta de informações 
                        sobre os locais, para o fazer.
                        Para suprir essa necessidade indicamos as pessoas o local correto, com 
                        informações necessárias para fazer esse descarte sem mais dificuldades.
                        </p>
                </BoxAboutApp>
            </BoxContent>
        </Container>
    )
}
export default AboutPage
