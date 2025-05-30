// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig:{
    auth:{
      secret : process.env.AUTH_SECRET
    }
  },

  modules:['@nuxt/ui', 'nuxt-server-utils' , '@sidebase/nuxt-auth'],
  ui:{} , 

  
  nuxtServerUtils:{
    mongodbUrl:process.env.MONGODB_URI
  },
  
  auth:{
    baseUrl:process.env.AUTH_ORIGIN,
    provider:{
      type: "authjs"
    }
  }
})
