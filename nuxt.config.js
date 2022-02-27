import i18n from './config/i18n';

export default {
  target: 'static',

  head: {
    title: 'Vitor Costa | Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
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
    '@nuxt-hero-icons/outline/nuxt',
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
    '@nuxt-hero-icons/solid/nuxt'
  ],

  colorMode: {
    classSuffix: ''
  },

  modules: [
    '@nuxtjs/pwa',
    [
      '@nuxtjs/i18n',
      {
        vueI18nLoader: true,
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'English'
          },
          {
            code: 'br',
            name: 'Português'
          }
        ],
        vueI18n: i18n
      }
    ]
  ],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  server: {
    port: 8000,
    host: '0.0.0.0',
    timing: false
  }
};
