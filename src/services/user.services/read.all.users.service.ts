import {getCustomRepository} from 'typeorm'
import UserRepository from '../../repositories/user.repositories'

const readUsers = async () => {

    const userRepository = getCustomRepository(UserRepository);

    const listUsers = await userRepository.find();
    
    return listUsers

}

export default readUsers