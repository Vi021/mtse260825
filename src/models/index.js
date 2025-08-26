import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import process from "process";
import { fileURLToPath, pathToFileURL } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// load config.json
import configJson from "../config/config.json" with { type: "json" };
const config = configJson[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
}
else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
// Dynamically import all models in this folder
const modelFiles = fs
    .readdirSync(__dirname)
    .filter((file) => file.indexOf(".") !== 0 &&
    file !== basename &&
    file.endsWith(".ts") &&
    !file.endsWith(".d.ts") &&
    !file.endsWith(".test.ts"));
for (const file of modelFiles) {
    const modelPath = pathToFileURL(path.join(__dirname, file)).href;
    const modelModule = await import(modelPath);
    const model = modelModule.default(sequelize, DataTypes);
    db[model.name] = model;
}
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
//# sourceMappingURL=index.js.map