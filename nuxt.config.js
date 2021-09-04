import colors from 'vuetify/es5/util/colors'

export default {
  env: {
    baseUrl: 'http://localhost:3000'
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - NuxtJs',
    title: 'NuxtJs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#319197'}

      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", crossorigin:"anonymous"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // '@nuxtjs/axios'
  
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/auth-next',
    // '@nuxtjs/axios'
  ],
  // auth:{
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'token',
  //         global: true,
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: 'user',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         Login: { url: '/api/auth/login', method: 'post' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get' }
  //       }
  //     }
  //   }
  // },

  // axios:{
  //   baseUrl:'https://jsonplaceholder.typicode.com/todos/1',
  //   confidentials:true,
  // },
 
 

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },


}
