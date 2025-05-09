import  bcrypt from 'bcryptjs'

export async function generateHash(data:String) {

    const salt =await bcrypt.genSalt(10)
    const hashedData = await bcrypt.hash(data,salt)

    return hashedData;
}
