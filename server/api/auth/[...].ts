
export default nuxtAuthHandler({
    secret : useRuntimeConfig().auth.secret
})