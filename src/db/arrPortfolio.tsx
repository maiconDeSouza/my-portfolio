import { 
    SiTypescript, 
    SiReact, SiStyledcomponents, 
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiVuedotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb 
} from 'react-icons/si'

export const arrPortfolio = [
    {
        gif: "https://raw.githubusercontent.com/maiconDeSouza/assets/master/todolist-ts-react/todo-web.gif",
        nameProject: "To do List React + TypeScript",
        description: "Este projeto é um dos desafios do Ignite React da Rocketseat. Neste desafio era preciso replicar o layout de um To Do List disponibilizado por eles. A utilização do React era obrigatória, mas o uso do TypeScript estava em aberto.",
        component: [
            {
                icon: <SiHtml5 color='#e34c26' size={23}/>,
                nameComponent: "HTML5"
            },
            {
                icon: <SiReact color="#00bcd4" size={23}/>,
                nameComponent: "React"
            },
            {
                icon: <SiTypescript color="#007acc" size={23}/>,
                nameComponent: "TypeScript"
            },
            {
                icon: <SiStyledcomponents color="#dd887a" size={30}/>,
                nameComponent: "Style-Components"
            }
        ],
        host: [
            {
                hostType: "github",
                url: "https://github.com/maiconDeSouza/todolist-ts-react"
            }
        ]
    },
    {
        gif: "https://raw.githubusercontent.com/maiconDeSouza/assets/master/crazy-login/crazy.gif",
        nameProject: "Crazy Login",
        description: "Enquanto o todos os campos não forem preenchido o botão de login ficará fugindo do click. Me inspirei em projeto semelhante que vi no Linkedin",
        component: [
            {
                icon: <SiHtml5 color='#e34c26' size={23}/>,
                nameComponent: "HTML5"
            },
            {
                icon: <SiCss3 color='#264de4' size={23}/>,
                nameComponent: "CSS3"
            },
            {
                icon: <SiJavascript color='#f0db4f' size={23} />,
                nameComponent: "JavaScript"
            }
        ],
        host: [
            {
                hostType: "github",
                url: "https://github.com/maiconDeSouza/crazylogin"
            },
            {
                hostType: "hosted",
                url: ""
            }
        ]
    },
    {
        gif: "https://raw.githubusercontent.com/maiconDeSouza/assets/master/lista-de-tarefas-vuejs/rodando.gif",
        nameProject: "To do List com VueJS",
        description: "Projeto Feito com VueJS 2, é uma tradicional lista de tarefas aproveitando algum dos melhores recursos do Framework.",
        component: [
            {
                icon: <SiHtml5 color='#e34c26' size={23}/>,
                nameComponent: "HTML5"
            },
            {
                icon: <SiCss3 color='#264de4' size={23}/>,
                nameComponent: "CSS3"
            },
            {
                icon: <SiVuedotjs color='#42b883' size={23} />,
                nameComponent: "VueJS"
            }
        ],
        host: [
            {
                hostType: "github",
                url: "https://github.com/maiconDeSouza/lista-de-tarefas-com-vueJS"
            }
        ]
    },
    {
        gif: "https://raw.githubusercontent.com/maiconDeSouza/assets/master/API-Restful/crud.gif",
        nameProject: "API-Restful",
        description: "Foi construido um Crud completo que salva as informações em um Banco de Dados MongoDB, o Front é básico feito em HTML apenas para testar a API.",
        position: "left",
        component: [
            {
                icon: <SiNodedotjs color='#3c873a' size={23}/>,
                nameComponent: "NodeJS"
            },
            {
                icon: <SiExpress color='#333333' size={23}/>,
                nameComponent: "ExpressJS"
            },
            {
                icon: <SiMongodb color='#049024' size={23}/>,
                nameComponent: "MongoDB"
            },
            
        ],
        host: [
            {
                hostType: "github",
                url: "https://github.com/maiconDeSouza/api-restful"
            }
        ]
    },
    {
        gif: "https://raw.githubusercontent.com/maiconDeSouza/assets/master/countdown/lancamento.gif",
        nameProject: "Countdown",
        description: "O Projeto é um Countdown que é muito usado em páginas de lançamento de produtos digitais.",
        position: "left",
        component: [
            {
                icon: <SiHtml5 color='#e34c26' size={23}/>,
                nameComponent: "HTML5"
            },
            {
                icon: <SiCss3 color='#264de4' size={23}/>,
                nameComponent: "CSS3"
            },
            {
                icon: <SiVuedotjs color='#42b883' size={23} />,
                nameComponent: "VueJS"
            }
        ],
        host: [
            {
                hostType: "github",
                url: "https://github.com/maiconDeSouza/countdown"
            }
        ]
    },
    {
        gif: "https://raw.githubusercontent.com/maiconDeSouza/assets/master/feed/feed.gif",
        nameProject: "feed-react-typescript",
        description: "Criando um Feed interativo.",
        component: [
            {
                icon: <SiHtml5 color='#e34c26' size={23}/>,
                nameComponent: "HTML5"
            },
            {
                icon: <SiCss3 color='#264de4' size={23}/>,
                nameComponent: "CSS3"
            },
            {
                icon: <SiJavascript color='#f0db4f' size={23} />,
                nameComponent: "JavaScript"
            },
            {
                icon: <SiTypescript color="#007acc" size={23}/>,
                nameComponent: "TypeScript"
            }
        ],
        host: [
            {
                hostType: "github",
                url: "https://github.com/maiconDeSouza/feed-react"
            }
        ]
    },
    {
        gif: "https://raw.githubusercontent.com/maiconDeSouza/assets/master/loterias/rodando.gif",
        nameProject: "Loterias",
        description: "Este Projeto se trata de uma API que retorna jogos de Loterias. Por exemplo, você escolhe a MegaSena a API retorna em JSON com 6 números que é a quantidade de números que o apostar deve marcar em sua aposta.",
        component: [
            {
                icon: <SiNodedotjs color='#3c873a' size={23}/>,
                nameComponent: "NodeJS"
            },
            {
                icon: <SiExpress color='#333333' size={23}/>,
                nameComponent: "ExpressJS"
            }
        ],
        host: [
            {
                hostType: "github",
                url: "https://github.com/maiconDeSouza/loterias"
            }
        ]
    },
    {
        gif: "https://raw.githubusercontent.com/maiconDeSouza/assets/master/projeto-monstro/rodando.gif",
        nameProject: "Jogo Derrote o Monstro!",
        description: "Neste Jogo você pode dar um ataque comum ond o mosntro geralemente tem vanategm, pode usar 3 ataques especiais onde geralmente você tem vantagem e 3 Curas onde você rece pontos de volta, mas ao mesmo tempo o monstro te ataca.",
        component: [
            {
                icon: <SiHtml5 color='#e34c26' size={23}/>,
                nameComponent: "HTML5"
            },
            {
                icon: <SiCss3 color='#264de4' size={23}/>,
                nameComponent: "CSS3"
            },
            {
                icon: <SiVuedotjs color='#42b883' size={23} />,
                nameComponent: "VueJS"
            }
        ],
        host: [
            {
                hostType: "github",
                url: "https://github.com/maiconDeSouza/jogo-derrote-o-monstro-vuejs"
            }
        ]
    },
    {
        gif: "https://raw.githubusercontent.com/maiconDeSouza/assets/master/barber-shop/roda-min.gif",
        nameProject: "projeto-barber-shop",
        description: "Uma landing Page completa e objetiva.",
        component: [
            {
                icon: <SiHtml5 color='#e34c26' size={23}/>,
                nameComponent: "HTML5"
            },
            {
                icon: <SiCss3 color='#264de4' size={23}/>,
                nameComponent: "CSS3"
            }
        ],
        host: [
            {
                hostType: "github",
                url: "https://github.com/maiconDeSouza/projeto-barber-shop"
            }
        ]
    },
    {
        gif: "https://raw.githubusercontent.com/maiconDeSouza/assets/master/timekeeper/web.gif",
        nameProject: "Timekeeper",
        description: "Neste projeto eu trago todas as funções de um cronômetro. Foram utilizado HTML, CS e JS puro.",
        component: [
            {
                icon: <SiHtml5 color='#e34c26' size={23}/>,
                nameComponent: "HTML5"
            },
            {
                icon: <SiCss3 color='#264de4' size={23}/>,
                nameComponent: "CSS3"
            },
            {
                icon: <SiJavascript color='#f0db4f' size={23} />,
                nameComponent: "JavaScript"
            }
        ],
        host: [
            {
                hostType: "github",
                url: "https://github.com/maiconDeSouza/timekeeper-cronometro"
            }
        ]
    }
]
