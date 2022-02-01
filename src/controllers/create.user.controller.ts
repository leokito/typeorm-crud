import { Request, Response } from "express";
import { createUser } from "../services/index.service";

const create = async ( req: Request, res: Response ) => {
    try {
    const user = await createUser(req.body)
    res.status(201).send({
        "message": "user successfully created!",
        user
    })} catch (error: any) {
        return res.status(error.statusCode).json({Error: error.message})
    }
}

export default create;