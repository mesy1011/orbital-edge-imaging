import "reflect-metadata";
import { DataSource } from "typeorm";

// Validate environment variables
if (
  !process.env.DATABASE_HOST ||
  !process.env.DATABASE_PORT ||
  !process.env.DATABASE_USER ||
  !process.env.DATABASE_PASSWORD ||
  !process.env.DATABASE_NAME
) {
  throw new Error(
    "Missing one or more required environment variables: DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME"
  );
}

// Initialize the data source
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || "5432"),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true, // Automatically sync database schema with models (use cautiously in production)
  logging: false, // Set to true for detailed SQL logging
  entities: ["src/models/*.ts"], // Path to your entity files
  migrations: ["src/migrations/*.ts"], // Optional: Path to migration files
  subscribers: ["src/subscribers/*.ts"], // Optional: Path to subscriber files
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process on a critical failure
  });



