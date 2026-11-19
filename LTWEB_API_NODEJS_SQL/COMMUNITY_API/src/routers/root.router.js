import { Router } from "express";
import demoRouter from "./demo.router";
import articleRouter from "./article.router";
import userRouter from "./user.router";

const rootRouter = Router()
rootRouter.use('/demo', demoRouter)
rootRouter.use('/articles', articleRouter)
rootRouter.use('/users', userRouter)

export default rootRouter