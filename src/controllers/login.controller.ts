import { Request, Response } from "express";
import { authenticateUser } from "../services/loginServices/login.service";

export const login = async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body
        const token = await authenticateUser(email, password)
        
        res.send({token})
    } catch (error: any) {
        return res.status(error.statusCode).json({Error: error.message})
    }
}
