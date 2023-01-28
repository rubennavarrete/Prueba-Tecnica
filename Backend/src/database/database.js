import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "bd_planificador",
  "postgres",
  "cmingruimr-8501",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
