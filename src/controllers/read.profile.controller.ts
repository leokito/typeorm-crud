import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repositories/user.repositories";


const currentUser = async (req: any, res: Response) => {
    
    const userId = req.user.id;
    
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      where: {
        id: userId,
      },
    });

    res.send(user)
}

export default currentUser