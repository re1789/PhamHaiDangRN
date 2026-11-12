const demoService = {
    search: (keyword, page) => {
        return `Keyword: ${keyword}; Page ${page}`
    },
    users: (userId) => {
        return `Thông tin người dùng ID: ${userId}`
    },
    login: (username, password) => {
        return `Username: ${username}; Password: ${password}`
    }
}
export default demoService