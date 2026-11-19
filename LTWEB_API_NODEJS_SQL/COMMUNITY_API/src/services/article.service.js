import prisma from "../lib/prisma.ts";

const articleService = {
    getAll: async ({ search, minViews, startDate, endDate }) => {
        const where = {
            ...(search && {
                OR: [
                    { title: { contains: search } },
                    { content: { contains: search } }
                ]
            }),
            ...((startDate || endDate) && {
                createdAt: {
                    ...(startDate && { gte: new Date(startDate) }),
                    ...(endDate && { lt: new Date(new Date(endDate).getTime() + 24 * 60 * 60 * 1000) }),
                },
            }),
        };

        const [articles, totalArticles] = await Promise.all([
            prisma.article.findMany({ where }),
            prisma.article.count({ where })
        ]);

        return { articles, totalArticles };
    },
    getOne: async (id) => {
        return await prisma.article.findUnique({
            where: { id: Number(id) }
        });
    }
};

export default articleService;