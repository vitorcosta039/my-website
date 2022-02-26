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

  plugins: [],

  components: [
    '~/components',
    { path: '~/components/other', extensions: ['vue'] }
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

  modules: ['@nuxtjs/pwa'],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {}
}
