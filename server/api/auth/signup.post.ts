import {validator} from 'nuxt-server-utils'

export default defineEventHandler(async (event)=>{
    const body = await readBody(event)
    validator.validateSchema(signupSchema,body)

    return "ok"
})