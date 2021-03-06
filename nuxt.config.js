
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Base: './' pour npm run generate et deploy/// '/roche/' pour dev
  router: {
    base: './',
    mode: 'hash'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'roche',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Site de la mairie de Rochecorbon' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-purgecss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // Simple usage
    'nuxt-imagemin',
    '@nuxt/content'
    // '@nuxtjs/component-cache'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: '/nuxt/',
    analyze: {
      analyzerMode: 'static'
    }
  }
}
