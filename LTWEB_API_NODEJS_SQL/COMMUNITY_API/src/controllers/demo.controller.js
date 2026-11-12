import demoService from "../services/demo.service"

const demoController = {
    search: (req, res) => {
        const {keyword, page} = req.query
        const result = demoService.search(keyword, page)
        res.json(result)
    },
    users: (req, res) => {
        const userId = req.params.id;
        const result = demoService.users(userId)
        res.json(result)
    },
    login: (req, res) => {
        const {username, password, remember} = req.body;
        const result = demoService.login(username, password)
        res.json({result, remember})
    }
}
export default demoController