import { ContainerContact } from "./Contact.styles";
import { SiLinkedin, SiWhatsapp } from "react-icons/si"
import { MdEmail } from 'react-icons/md'
import { PageTitle } from "../PageTitle/PageTitle";

export function Contact(){
    return (
        <ContainerContact className="animate__animated animate__fadeInTopLeft">
            <PageTitle text="CONTATO" />
            <main>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/maicon-pereira-de-souza-00b437253/" target="_blank">
                        <SiLinkedin size={60}/>
                        <h4>Linkedin</h4>
                        <span>Linkedin</span>
                    </a>
                </div>
                <div className="email">
                    <a href="mailto:maicon_souza09@hotmail.com" target="_blank">
                        <MdEmail size={60}/>
                        <h4>EMAIL</h4>
                        <span>maicon_souza09@hotmail.com</span>
                    </a>
                </div>
                <div className="tel">
                    <a href="https://wa.me/5511959973336" target="_blank">
                        <SiWhatsapp size={60}/>
                        <h4>Chamada ou WhatsApp</h4>
                        <span>11 9 5997-3336</span>
                    </a>
                </div>
            </main>
        </ContainerContact>
    )
}