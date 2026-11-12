import { Router } from "express";
import demoRouter from "./demo.router";

const rootRouter = Router()
rootRouter.use('/demo', demoRouter)
export default rootRouter