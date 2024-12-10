import bcrypt from 'bcrypt'

export const encryptPassword = async(plainPassword)=>{
    try {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(plainPassword,saltRounds)
        return hashedPassword
        
    } catch (error) {
        console.log(error)
    }
}

export const comparePasswrod = async(password, hashedPassword)=>{
    // console.log(password,hashedPassword)
   return bcrypt.compare(password, hashedPassword)
}
