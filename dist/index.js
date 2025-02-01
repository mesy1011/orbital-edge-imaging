import "reflect-metadata";
import { AppDataSource } from "./database.js"; // Ensure this path is correct
AppDataSource.initialize()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error("Database connection error:", error));
