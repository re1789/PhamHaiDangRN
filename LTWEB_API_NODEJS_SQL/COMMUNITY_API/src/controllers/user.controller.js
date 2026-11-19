import userService from "../services/user.service"

const userController = {
    getAll: async(req, res) => {
        const {fullName, email, roleId, isDeleted} = req.query
        const user = await userService.getAll({fullName, email, roleId, isDeleted});
        res.json(user)
    }
}
export default userController;