import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Calendario = sequelize.define("calendario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
  
},{
    timestamps: false
}

);
