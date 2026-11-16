import { Router } from "express";
import demoRouter from "./demo.router";
import articleRouter from "./article.router";

const rootRouter = Router()
rootRouter.use('/demo', demoRouter)
rootRouter.use('/articles', articleRouter)

export default rootRouter