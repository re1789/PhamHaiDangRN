import express from "express"
const app = express();
const port = 3069
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
app.get('/search', (req, res) => {
    res.send(`Dữ liệu từ client gửi lên là: keyword = ${req.query.keyword} và page = ${req.query.page}`)
})
app.params('', (req, res) => {
    res.send(``)
})