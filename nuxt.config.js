import { resolve } from 'path';
import i18n from './config/i18n';

export default {
  target: 'static',

  alias: {
    images: resolve(__dirname, './assets/images')
  },

  head: {
    title: 'Vitor Costa | Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'author', name: 'author', content: 'Vitor Costa' },
      {
        hid: 'description',
        name: 'description',
        content: 'Olá, meu nome é Vitor Costa, sou Dev Front-end.'
      },
      {
        name: 'keywords',
        content:
          'front-end, developer, frontend developer, desenvolvedor frontend, vuejs, vue, js, nuxt, nuxtjs, web, site, website, vitor costa, vitor costa dev, vitor costa desenvolvedor, vitor costa front-end, frontend, vitorcosta front-end, vitorcosta desenvolvedor'
      },

      // OpenGraph
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'og:url', content: 'https://vitorcosta.dev' },
      { name: 'og:title', content: 'Vitor Costa - Dev Front-end' },
      { name: 'og:site_name', content: 'Vitor Costa' },
      {
        name: 'og:description',
        content: 'Olá, meu nome é Vitor Costa, sou Dev Front-end.'
      },
      { name: 'og:image', content: 'https://vitorcosta.dev/icon.png' },
      { name: 'og:image:type', content: 'image/png' },
      { name: 'og:image:width', content: '1000' },
      { name: 'og:image:height', content: '1000' },
      { name: 'og:type', content: 'website' },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: 'https://vitorcosta.dev' },
      { name: 'twitter:title', content: 'Vitor Costa - Dev Front-end' },
      {
        name: 'twitter:description',
        content: 'Olá, meu nome é Vitor Costa, sou Dev Front-end.'
      },
      { name: 'twitter:image', content: 'https://vitorcosta.dev/icon.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['./assets/style/main.scss'],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Poppins: [400, 600, 700]
        }
      }
    ],
    [
      '@nuxtjs/style-resources',
      {
        scss: [
          './assets/style/abstracts/_mixins.scss',
          './assets/style/abstracts/_variables.scss'
        ]
      }
    ],
    '@nuxtjs/tailwindcss',
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt',
    'nuxt-animejs'
  ],

  colorMode: {
    classSuffix: ''
  },

  modules: [
    '@nuxtjs/gtm',
    [
      '@nuxtjs/i18n',
      {
        baseUrl: 'https://vitorcosta.dev',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root'
        },
        defaultLocale: 'br',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English'
          },
          {
            code: 'br',
            iso: 'pt-BR',
            name: 'Português'
          }
        ],
        seo: true,
        vueI18n: i18n,
        vueI18nLoader: true
      }
    ],
    '@nuxtjs/robots',
    'v-wave/nuxt'
  ],

  gtm: {
    id: 'GTM-MLDRZ8Z'
  },

  plugins: [{ src: '~/plugins/scrollreveal', ssr: false }],

  server: {
    port: 8000,
    host: '0.0.0.0',
    timing: false
  }
};
