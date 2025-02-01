"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "oei_user",
    password: "oei_password",
    database: "oei_database",
    synchronize: true,
    logging: true,
    entities: ["src/models/*.ts"],
});
