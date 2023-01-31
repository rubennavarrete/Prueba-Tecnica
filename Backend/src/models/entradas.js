import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Estado } from './estado.js'

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
});

//Crea la clave foránea en estado
Entradas.hasOne(Estado, { //Relacion Uno a Uno > Entradas a estado
  foreignKey: 'entradaId', //Nombre da la columna 
  sourceKey: 'id'         //Relacion con el id de Entradas
});

//Enlace a la tabla padre
Estado.belongsTo(Entradas, {
  foreignKey: 'entradaId',
  target: 'id'  //clave destino
});