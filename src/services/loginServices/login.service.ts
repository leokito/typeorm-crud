import {getCustomRepository} from 'typeorm'
import UserRepository from '../../repositories/user.repositories'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ErrorHandler  from '../../errors/application.error'

export const authenticateUser = async (email: string, password: string) => {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.search_by_email(email);
    
    try{
        if (user === undefined || !bcrypt.compareSync(password, user.password)) {
            throw new ErrorHandler("Wrong email or password!", 400)
    } 
        const token = jwt.sign({id: user.id, isAdmin: user.isAdmin}, process.env.SECRET as string, {expiresIn: '1d'})

        return token

    } catch (error: any) {
        throw new ErrorHandler("Wrong email or password!", 400)
    }
}