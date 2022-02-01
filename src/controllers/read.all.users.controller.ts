import { Request, Response } from "express";
import { readUsers } from "../services/index.service";

const read = async (req: Request, res: Response) => {
    try {
        const users = await readUsers()

        return res.json(users)
    
    } catch(error: any) {
        return res.status(error.statusCode).json({Error: error.message})
    }
}

export default read