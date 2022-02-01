import { Request, Response } from "express";
import updateUser from "../services/user.services/update.user.service";

const update = async (req: Request, res: Response) => {

  const {id} = req.params
  
  try {
    
    const updatedUser = await updateUser(id, req.body)
  
    return res.status(200).json(
      {
      "message": "User successfully updated!", 
      updatedUser
      });

  } catch (error: any) {
    return res.status(error.statusCode).json({Error: error.message})
  }
}

export default update
