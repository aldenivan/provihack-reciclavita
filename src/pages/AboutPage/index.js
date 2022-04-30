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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nulla at risus. Quisque purus magna, auctor et,
                        sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nulla at risus</p>
                </BoxAboutApp>
            </BoxContent>
        </Container>
    )
}
export default AboutPage
