import express from "express"
import rootRouter from "./src/routers/root.router";
const app = express();
const port = 3069;
app.use(express.json());
app.use('/api/v1', rootRouter)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
// app.get('/search', (req, res) => {
//     res.send(`Dữ liệu từ client gửi lên là: keyword = ${req.query.keyword} và page = ${req.query.page}`)
// })
// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`Thông tin người dùng ID: ${userId}`);
// })
// app.post('/login', (req, res) => {
//     const {username, password, remember} = req.body;
//     res.send({username, password, remember});
// })
// app.get('/profile', (req, res) => {
//     const token = req.headers['token'];
//     const version = req.headers['version'];
//     const device = req.headers  ['device'];

//     res.send({token, version, device});
// })