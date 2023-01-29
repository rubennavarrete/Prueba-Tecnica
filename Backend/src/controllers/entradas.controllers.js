import { Entradas } from "../models/entradas.js";

export const getEntradas = async (req, res) => {
  try {
    const entradas = await Entradas.findAll();
    res.json(entradas);
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
    if(!entrada) return res.status(404).json({message:"No existe la entrada"})
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
    res.json(entrada);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEntrada = async (req, res) => {
  const { id } = req.params;
  try {
    await Entradas.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
