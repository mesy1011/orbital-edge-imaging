"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const database_1 = require("./database");
database_1.AppDataSource.initialize()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error("Database connection error:", error));
