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
    validate: {
      min: 1,
      max: 31
    }
  },
  mes: {
    type: DataTypes.INTEGER,
    validate:{
      min:1,
      max: 12
    }
  },
  anio: {
    type: DataTypes.INTEGER,
    validate:{
      min:2000,
      max: 5000
    }
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