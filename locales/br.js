export default {
  menu: {
    'about-me': 'sobre mim',
    skills: 'skils',
    portfolio: 'portfólio',
    experience: 'experiência',
    contact: 'contato'
  },
  hero: {
    presentation: ['olá,', 'me chamo Vitor,', 'sou Dev Front-end.'],
    welcome: ['SEJA', 'BEM-VINDO'],
    contact: 'entre em contato',
    project: {
      title: 'Imobille',
      description: 'Imobiliária em Balneário Camboriú, Itajái e Praia Brava',
      textLink: 'acessar'
    }
  },
  about: {
    title: 'Sobre mim',
    description: [
      'Olá, meu nome é Vitor, 21 anos, sou desenvolvedor Front-End da cidade de São Vicente/SP, tenho 3 anos de experiência na área. Atualmente trabalho na empresa Totalpass, desenvolvendo e implementando o Front-End de websites. Atuo também como freelancer e apesar de não ser meu foco, já realizei alguns trabalhos como UI Designer.',
      'Sou formado em Técnico em Informática pela ETEC Dra. Ruth Cardoso de São Vicente/SP, foi lá que conheci o mundo do desenvolvimento web e acabei me identificando bastante com a área. Desde então, venho me aprofundando e aprendendo cada dia mais.'
    ],
    occupation: 'Desenvolvedor Front-end'
  },
  skills: {
    'dev-web': {
      title: 'desenvolvimento web',
      text: 'Linguagens e ferramentas que tenho experiência para Desenvolvimento Web. Criação de landing pages, blogs e e-commerces em sua maior parte do zero, com o auxílio de wireframes e telas projetadas.'
    },
    design: {
      title: 'design',
      text: 'Ferramentas para a criação de telas, flyers, vídeos animados e tudo relacionado a parte de visual Web.'
    }
  },
  portfolio: {
    title: 'portfólio',
    filters: ['Todos', 'Pessoais', 'Profissionais'],
    projects: {
      imb: {
        description:
          'Levantamento de requisitos, criação da parte de Front-end e integração com API.',
        category: 'Profissional'
      },
      zinco: {
        description:
          'Criação da parte de Front-end e integração com ferramenta de criação de PWA.',
        category: 'Profissional'
      },
      mv: {
        description:
          'Criação da parte de Front-end e integração com ferramenta de criação de PWA.',
        category: 'Profissional'
      },
      efs: {
        description:
          'Criação da parte de Front-end e integração com ferramenta de criação de PWA.',
        category: 'Profissional'
      },
      scl: {
        description:
          'Criação da parte de Front-end e integração com ferramenta de criação de PWA.',
        category: 'Profissional'
      }
    }
  },
  experience: {
    title: 'experiência profissional',
    jobs: [
      {
        company: 'TotalPass Brasil',
        img: 'tp.png',
        period: 'Jan. 2022 - o momento',
        occupation: 'Front-End Engineer',
        functions: [
          '• Criação e manutenção de layout de Websites;',
          '• Análise de possíveis projetos para implementação e melhoria dos processos da empresa.'
        ]
      },
      {
        company: 'Nerau CX',
        img: 'nerau.png',
        period: 'Out. 2020 - Dez. 2021',
        occupation: 'Desenvolvedor Front-End',
        functions: [
          '• Desenvolvimento do Front-end de e-commerces para posteriormente serem implementadas as funcionalidades;',
          '• Integração de Front-end a uma ferramenta de geração de PWA;',
          '• Criação e implementação de sistemas completos com Vue/Nuxt;',
          '• Análise de requisitos para implementação de projetos;',
          '• Manutenção do layout de Websites.'
        ]
      },
      {
        company: 'Triad Productivity Solutions',
        img: 'triad.png',
        period: 'Ago. 2019 - Abr. 2021',
        occupation: 'Web Designer',
        functions: [
          '• Codificação e desenvolvimento de telas de Websites;',
          '• Criação de banners, thumbnails e conteúdos visuais para Websites;',
          '• Gerenciamento de conteúdo de plataformas educacionais.'
        ]
      }
    ]
  },
  footer: {
    contact: {
      title: 'entre em contato',
      quote: 'o seu projeto pode mudar o mundo.'
    },
    rights: 'Todos os direitos reservados'
  }
};
