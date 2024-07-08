import  argon2  from 'argon2'

// database/user.ts
export const authentication = async (password: string) => {
    return await argon2.hash(password)
}