import { Router } from "express";
import articleController from "../controllers/article.controller";

const articleRouter = Router()
articleRouter.get('/', articleController.getAll)

export default articleRouter