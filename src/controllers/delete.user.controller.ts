import UserRepository from "../repositories/user.repositories"
import { getCustomRepository } from "typeorm"
import { deleteUser } from "../services/index.service"
import ErrorHandler from "../errors/application.error"

const userDelete = async (req: any, res: any) => {

    try {
    const id = req.params

    const userRepo = getCustomRepository(UserRepository)

    const user = await userRepo.findOne(id)
    console.log(user)
    if (!user) {
        throw new ErrorHandler("User not found.", 404)
    }

    await deleteUser(id)

    return res.status(200).json({message: "User sucessfully deleted"})

    } catch (e: any) {   
        return res.status(e.statusCode).json({"Error": e.message})
    }
}

export default userDelete