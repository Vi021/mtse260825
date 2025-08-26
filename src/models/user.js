import { Model, Sequelize, DataTypes } from "sequelize";
class User extends Model {
    id;
    email;
    password;
    firstName;
    lastName;
    address;
    phoneNumber;
    gender;
    image;
    roleId;
    positionId;
    createdAt;
    updatedAt;
    static associate(models) {
        // Example: User.belongsTo(models.Role, { foreignKey: "roleId" });
    }
}
export default (sequelize) => {
    User.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        address: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        gender: DataTypes.BOOLEAN,
        image: DataTypes.STRING,
        roleId: DataTypes.STRING,
        positionId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "User",
        tableName: "Users",
    });
    return User;
};
//# sourceMappingURL=user.js.map