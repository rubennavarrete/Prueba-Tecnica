import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "db_inventario",
  "postgres",
  "pr@ct1c@5",
  {
    host: "143.110.144.231",
    dialect: "postgres",
    logging:false
  }
);


