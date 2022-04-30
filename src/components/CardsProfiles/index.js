import React, {useState} from 'react'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {ProfilesStyled} from './styles'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Profiles} from '../Profiles'

const CardsProfiles = () => {
    
    const [showCopied, setShowCopied] = useState(false)
    const showClipBordCopy = () =>{
        setShowCopied(true)
        setTimeout(()=>{
            setShowCopied(false)
        },1500)
        
    }
    
    return Profiles.map((profile) =>{    
        return (
        <ProfilesStyled>
            <img  src={profile.image} alt={`foto perfil ${profile.name}`} />
            <section>
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
                <span>      
                    <a href={profile.linkedin} target="_black"><FaLinkedinIn /></a>
                    <a href={profile.github} target="_black"><FaGithub/></a>
                    <CopyToClipboard text={profile.email}>
                    <AiOutlineMail onClick={()=>showClipBordCopy()}/>
                    </CopyToClipboard>
                    {showCopied && <p>Email copiado</p>}
                </span>
            </section>
        </ProfilesStyled>
        )
    })
}
export default CardsProfiles