import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
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
