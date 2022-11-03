import { ContainerContact } from "./Contact.styles";
import { SiLinkedin, SiWhatsapp } from "react-icons/si"
import { MdEmail } from 'react-icons/md'

export function Contact(){
    return (
        <ContainerContact className="animate__animated animate__fadeInTopLeft">
            <div className="linkedin">
                <a href="">
                    <SiLinkedin size={60}/>
                    <h4>Linkedin</h4>
                    <span>Linkedin</span>
                </a>
            </div>
            <div className="email">
                <a href="">
                    <MdEmail size={60}/>
                    <h4>EMAIL</h4>
                    <span>maicon_souza09@hotmail.com</span>
                </a>
            </div>
            <div className="tel">
                <a href="">
                    <SiWhatsapp size={60}/>
                    <h4>Chamada ou WhatsApp</h4>
                    <span>11 9 5997-3336</span>
                </a>
            </div>
        </ContainerContact>
    )
}