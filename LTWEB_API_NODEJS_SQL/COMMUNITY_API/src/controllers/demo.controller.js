import demoService from "../services/demo.service"

const demoController = {
    search: (req, res) => {
        const {keyword, page} = req.query
        const result = demoService.search(keyword, page)
        res.json(result)
    }
}

export default demoController