import { Router } from "express";
import { login } from "./controllers/login.controller";
import { create, read, currentUser, update, userDelete} from './controllers'
import { authenticated, verifyAccount, verifyAdmin } from "./middlewares/index.middleware";

const router = Router();

router.post('/users', create)
router.post('/login', login)
router.get('/users', authenticated, verifyAdmin, read)
router.get('/profile', authenticated, currentUser)
router.patch('/users/:id', authenticated, verifyAccount, update)
router.delete('/users/:id', authenticated, verifyAccount, userDelete)

export default router;