import { Router } from "express";
import demoController from "../controllers/demo.controller";

const demoRouter = Router()
demoRouter.get('/search', demoController.search)
demoRouter.get('/users/:id', demoController.users)
demoRouter.post('/login', demoController.login)

export default demoRouter