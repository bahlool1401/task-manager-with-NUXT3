// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules:['@nuxt/ui', 'nuxt-server-utils'],
  ui:{} , 

  nuxtServerUtils:{
    mongodbUrl:process.env.MONGODB_URI
  }
})
