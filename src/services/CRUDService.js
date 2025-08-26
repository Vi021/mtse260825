// CRUDService.ts
import bcrypt from "bcryptjs";
import db from "../models/index.js";
export const createUser = async (data) => {
    const hashPasswordFromBcrypt = await bcrypt.hash(data.password, 10);
    await db.User.create({ ...data, password: hashPasswordFromBcrypt });
    return "A new user has been successfully created";
};
export const getAllUser = async () => {
    return await db.User.findAll({ raw: true });
};
export const getUserById = async (userId) => {
    return await db.User.findOne({ where: { id: userId }, raw: true });
};
export const updateUser = async (data) => {
    const user = await db.User.findOne({ where: { id: data.id } });
    if (user) {
        Object.assign(user, data);
        await user.save();
        return db.User.findAll({ raw: true });
    }
    return [];
};
export const deleteUser = async (userId) => {
    const user = await db.User.findOne({ where: { id: userId } });
    if (user)
        await user.destroy();
    return "User deleted successfully";
};
//# sourceMappingURL=CRUDService.js.map