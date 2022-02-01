import { getCustomRepository } from "typeorm"
import ErrorHandler from "../../errors/application.error"
import UserRepository from "../../repositories/user.repositories"
import bcrypt from 'bcrypt'

const updateUser = async (id: string, data: any) => {

    const userRepo = getCustomRepository(UserRepository)
    const user = await userRepo.findOne(id)
    
    if (!user) {
        throw new ErrorHandler("User not found", 404)
    }
    if (data.isAdmin !== undefined) {
        throw new ErrorHandler("Admin status cannot be updated", 401)
    }
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 6)
    }
    
    await userRepo.update(id, data)

}

export default updateUser