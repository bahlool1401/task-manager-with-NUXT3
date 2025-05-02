import {Validator} from 'nuxt-server-utils'



export default defineEventHandler(async (event)=>{
    const body = await readBody(event)

    Validator.validateSchema(SignupSchema,body)

    return "ok"
}) 