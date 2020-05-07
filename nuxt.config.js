require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/axios', '@/plugins/api-accessor', '@/plugins/cypress'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
    // '@nuxtjs/style-resources'
  ],
  // styleResources: {
  //   sass: ['@/assets/scss/main.scss']
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
    // baseURL: process.env.VUE_APP_BASE_API, // api 요청을 위한 BASE URL
    // timeout: 5000, // request timeout
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  },
  proxy: {
    '/albums': {
      target: 'https://jsonplaceholder.typicode.com/',
      secure: false,
      changeOrigin: true
    }
  },
  dotenv: {
    filename:
      process.env.NODE_ENV === 'production'
        ? '.env'
        : '.env.' + process.env.NODE_ENV
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
