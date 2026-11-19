import articleService from "../services/article.service";

const articleController = {
    getAll: async (req, res) => {
        const {search, userId, minViews, startDate, endDate} = req.query
        const articles = await articleService.getAll({search, userId, minViews, startDate, endDate});
        res.json(articles);
    }
}

export default articleController;