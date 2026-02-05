import bcrypt from 'bcryptjs'

export const hashpasswords = async(passwords)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(passwords,salt);

}

export const passwordscheck = async (passwords,hashpasswords)=>{
    return await bcrypt.compare(passwords,hashpasswords);

}