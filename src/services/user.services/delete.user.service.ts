import UserRepository from "../../repositories/user.repositories"
import { getCustomRepository } from "typeorm"

const deleteUser = async (id: string) => {

    const userRepo = getCustomRepository(UserRepository)

    await userRepo.delete(id)

}

export default deleteUser