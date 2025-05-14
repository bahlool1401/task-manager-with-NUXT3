import {Validator} from 'nuxt-server-utils'
import SignupSchema from '~/schemas/signup.schema'
import {User} from '~/server/models/User.model'



export default defineEventHandler(async (event)=>{
    const body = await readBody(event)

    Validator.validateSchema(SignupSchema,body)

    const user = await User.create(body)


    // return "ok"
    return {...user.toObject(), password:undefined}
}) 