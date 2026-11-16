import prisma from "../lib/prisma.ts"

const articleService = {
    getAll: async () => {
        const articles = await prisma.articles.findMany()
        return articles
    },
    getOne: async (id) => {
        return await prisma.articles.findUnique({
            where: {id: id}
        })
    }
}

export default articleService