import { PageTitle } from "../PageTitle/PageTitle";
import { ContainerAboutMe } from "./AboutMe.style";


export function AboutMe(){
    return (
        <ContainerAboutMe className="animate__animated animate__slideInDown">
            <PageTitle text="Quem Sou"/>
            <main>
                <article>
                    <div className="title">
                        <h1>Maicon Pereira de Souza</h1>
                        <h3>Full Stack Web Developer</h3>
                    </div>
                    <div className="paragraph">
                        <p>
                            <span>Olá,</span>sou o Maicon e tenho 34 anos. Sou um apaixonado pela 
                            minha família, por tecnologia, por Futebol e pela Natureza.
                        </p>
                        <p>
                            A Maior parte da minha vida profissional atuei com vendas de equipamentos 
                            de ginástica, e também acabei me apaixonando por essa área. Neste período 
                            trabalhei em lojas fazendo atendimentos internos e também realizando 
                            visitas diretamente em clientes como Academias e Condomínios. E foi com 
                            condomínios que eu trouxe uma solução que se tornou um dos meus maiores 
                            diferenciais para este segmento, que foi a criação de layouts 3D usando o 
                            SketchUp que aprendi por iniciativa própria. Essa prática que foi se 
                            tornando quase um padrão para as lojas, pois, existia a necessidade que 
                            os moradores dos condomínios pudessem ver com ficária a sala de ginástica 
                            deles.
                        </p>
                        <p>
                            Este mercado onde eu trabalhava foi muito afetado pela pandemia, então decidi 
                            fazer uma transição de carreira e escolhi outra coisa que sempre me apaixonou 
                            que é o desenvolvimento Web. Antes de começar a estudar a sério eu já conhecia
                            HTML, CS, JS e um pouquinho de PHP. Do JavaScript eu carregava uma pequena 
                            bronca e não gostava muito da linguagem, porém, quando comecei a estudar a 
                            fundo eu <span className="emotion">&#128525;</span>, então defini que iria me aprofundar em 
                            todo o ecossistema JavaScript.
                        </p>
                        <p className="emphasis">
                            Neste exato momento estou procurando minha primeira oportunidade de trabalhar 
                            na área e conseguintemente buscando ganhar muito conhecimento com essa nova 
                            experiencia. Também contribuir com muito <strong>empenho</strong> e 
                            <strong> trabalho em equipe</strong> que são características que tenho certeza 
                            que sempre demostrei na minha caminhada profissional.
                        </p>
                    </div>
                </article>
            </main>
        </ContainerAboutMe>
    )
}