import { sequelize } from "../database/database.js";
import { Entradas } from "../models/entradas.js";
export const getEntradas = async (req, res) => {
  try {
    const entradas = await Entradas.findAll();
    //const json =Object.assign({},entradas)
    //res.send(entradas);
    res.json({
      status: 200,
      message: "OK",
      body:entradas
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEntrada = async (req, res) => {
  try {
    const { titulo } = req.params;
    const entrada = await Entradas.findOne({
      where: {
        titulo,
      },
    });
    if (!entrada)
      return res.status(404).json({ message: "No existe la entrada" });
    res.json(entrada);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEntrada = async (req, res) => {
  const { titulo, descripcion, dia, mes, anio, lugar, hora } = req.body;
  try {
    const newEntrada = await Entradas.create({
      titulo,
      descripcion,
      dia,
      mes,
      anio,
      lugar,
      hora,
    });
    console.log(req.body);  //Recepeción de datos
    res.send(newEntrada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEntrada = async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, dia, mes, anio, lugar, hora } = req.body;
  try {
    const entrada = await Entradas.findByPk(id);
    entrada.titulo = titulo;
    entrada.descripcion = descripcion;
    entrada.dia = dia;
    entrada.mes = mes;
    entrada.anio = anio;
    entrada.lugar = lugar;
    entrada.hora = hora;
    await entrada.save();
    res.status(200).json({ body: entrada });
    //res.json(entrada);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEntrada = async (req, res) => {
  const { dia } = req.params;
  try {
    await Entradas.destroy({
      where: {
        dia,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const getEntradaTres = async (req, res) => {
  try {
    const entradas = await Entradas.findAll(
        {
            limit:4,
            order:[['dia', 'ASC']]
        }
    );
    //const json =Object.assign({},entradas)
    //res.send(entradas);
    res.json({
      status: 200,
      message: "OK",
      body:entradas
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
