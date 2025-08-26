import { Model, Sequelize, type Optional } from "sequelize";
interface UserAttributes {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    gender: boolean;
    image?: string | null;
    roleId: string;
    positionId: string;
    createdAt?: Date;
    updatedAt?: Date;
}
type UserCreationAttributes = Optional<UserAttributes, "id" | "image" | "createdAt" | "updatedAt">;
declare class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    gender: boolean;
    image: string | null;
    roleId: string;
    positionId: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    static associate(models: any): void;
}
declare const _default: (sequelize: Sequelize) => typeof User;
export default _default;
//# sourceMappingURL=user.d.ts.map