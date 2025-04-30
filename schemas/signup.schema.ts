import {z} from "zod"

export default z.object({
    name : z.string().min(3).max(50),
    email:z.string().email(),
    password :z.string().min(8),
    passwordConfirn:z.string().min(8)
}).refine(data=>data.password===data.passwordConfirn,{
    message : 'Password do not mach',
    path:['passwordConfirn']
})