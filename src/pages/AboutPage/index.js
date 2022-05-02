import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardsProfiles from '../../components/CardsProfiles'
import {BoxContent, BoxAboutApp, Container} from './styles'

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
            <Footer/>
        </Container>
    )
}
export default AboutPage
