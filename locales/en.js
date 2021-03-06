export default {
  menu: {
    'about-me': 'about me',
    skills: 'skils',
    portfolio: 'portfolio',
    experience: 'experience',
    contact: 'contact'
  },
  hero: {
    presentation: ['Hi,', 'my name is Vitor,', "I'm a Front-end Dev."],
    welcome: ['BE', 'WELCOME'],
    contact: 'contact me',
    project: {
      title: 'Imobille',
      description: 'Real estate in Balneário Camboriú, Itajái and Praia Brava',
      textLink: 'access'
    }
  },
  about: {
    title: 'About me',
    description: [
      "Hello, my name is Vitor, 21 years old, I'm a Front-End developer from the city of São Vicente/SP, I have 3 years of experience in the area. Currently I work at Totalpass, developing and implementing the Front-End of websites. I also work as a freelancer but it's not my focus and I've done some work as a UI Designer too.",
      "I am a computer technician by ETEC Dra. Ruth Cardoso from São Vicente/SP, it was there that I got to know the world of web development and ended up identifying myself a lot with the area. Since then, I've been deepening and learning more every day."
    ],
    occupation: 'Front-end Developer'
  },
  skills: {
    'dev-web': {
      title: 'web development',
      text: 'Languages and tools that I have experience for Web Development. Creation of landing pages, blogs and e-commerces mostly from scratch, with the help of wireframes and projected screens.'
    },
    design: {
      title: 'design',
      text: 'Tools for creating screens, flyers, animated videos and everything related to the visual part of the Web.'
    }
  },
  portfolio: {
    title: 'portfolio',
    filters: ['All', 'Personal', 'Professional'],
    projects: {
      imb: {
        description:
          'Requirements gathering, creation of the Front-end part and API integration.',
        category: 'Professional'
      },
      zinco: {
        description:
          'Front-end creation and integration with PWA creation tool.',
        category: 'Professional'
      },
      mv: {
        description:
          'Front-end creation and integration with PWA creation tool.',
        category: 'Professional'
      },
      efs: {
        description:
          'Front-end creation and integration with PWA creation tool.',
        category: 'Professional'
      },
      scl: {
        description:
          'Front-end creation and integration with PWA creation tool.',
        category: 'Professional'
      }
    }
  },
  experience: {
    title: 'professional experience',
    jobs: [
      {
        company: 'TotalPass Brasil',
        img: 'tp.png',
        period: 'Jan. 2022 - until the moment',
        occupation: 'Front-End Engineer',
        functions: [
          '• Website layout creation and maintenance;',
          '• Analysis of possible projects for implementation and improvement of company processes.'
        ]
      },
      {
        company: 'Nerau CX',
        img: 'nerau.png',
        period: 'Oct. 2020 - Dec. 2021',
        occupation: 'Front-End Developer',
        functions: [
          '• Development of the e-commerce Front-end to later implement the functionalities;',
          '• Front-end integration to a PWA generation tool;',
          '• Creation and implementation of complete systems with Vue/Nuxt;',
          '• Requirements analysis for project implementation;',
          '• Website layout maintenance.'
        ]
      },
      {
        company: 'Triad Productivity Solutions',
        img: 'triad.png',
        period: 'Aug. 2019 - Apr. 2021',
        occupation: 'Web Designer',
        functions: [
          '• Coding and development of Website;',
          '• Creation of banners, thumbnails and visual content for Websites;',
          '• Content management of educational platforms.'
        ]
      }
    ]
  },
  footer: {
    contact: {
      title: 'contact me',
      quote: 'your project can change the world.'
    },
    rights: 'All rights reserved'
  }
};
