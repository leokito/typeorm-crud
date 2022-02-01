import {getCustomRepository} from 'typeorm'
import UserRepository from '../../repositories/user.repositories'
import bcrypt from "bcrypt";
import ErrorHandler from '../../errors/application.error';

interface UserBody {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

const createUser = async (body: UserBody) => {

    const {name, email, password, isAdmin} = body;

    const userRepository = getCustomRepository(UserRepository)
    const userAlreadyExists = await userRepository.search_by_email(email)

    if (userAlreadyExists) {
        throw new ErrorHandler("User Already Exists!", 409)
    }

    const user = userRepository.create({
        name,
        email,
        password,
        isAdmin,
    })

    await userRepository.save(user)
    
    const {password: data_password, ...data} = user

    return data
};

export default createUser
