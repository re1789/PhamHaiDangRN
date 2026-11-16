import articleService from "../services/article.service";

const articleController = {
    getAll: async (req, res) => {
        const articles = await articleService.getAll();
        res.json(articles);
    }
}

export default articleController;