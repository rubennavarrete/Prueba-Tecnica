import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Entradas = sequelize.define("entradas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  dia: {
    type: DataTypes.INTEGER,
  },
  mes: {
    type: DataTypes.INTEGER,
  },
  anio: {
    type: DataTypes.INTEGER,
  },
  lugar: {
    type: DataTypes.STRING,
  },
  hora: {
    type: DataTypes.TIME,
  },
  
},{
    timestamps: false
}

);
