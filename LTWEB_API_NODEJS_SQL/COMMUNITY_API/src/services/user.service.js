import prisma from "../lib/prisma.ts";

const userService = {
  getAll: async ({ fullName, email, roleId }) => {

    const where = {
      ...(fullName && {
        fullName: { contains: fullName }
      }),
      ...(email && {
        email: { contains: email }
      }),
      ...(roleId !== undefined && roleId !== "" && {
        roleId: Number(roleId)
      })
    };

    const [users, totalUsers] = await Promise.all([
      prisma.user.findMany({ where: where }),
      prisma.user.count({ where: where })
    ]);

    return { users, totalUsers };
  }
};

export default userService;