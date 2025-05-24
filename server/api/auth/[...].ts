import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "~/server/models/User";


export default nuxtAuthHandler({
    secret : useRuntimeConfig().auth.secret,
    pages: {
        signIn : "/auth/signin"
    },
    providers:[
        
    ]
})