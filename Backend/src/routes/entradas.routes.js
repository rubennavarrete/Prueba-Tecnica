import { Router } from "express";
import { createEntrada, deleteEntrada, getEntrada, getEntradas, updateEntrada, getTresEntradas } from "../controllers/entradas.controllers.js";
const router = Router();

router.get("/entradas", getEntradas);
router.post("/entradas", createEntrada);
router.put("/entradas/:id",updateEntrada);
router.delete("/entradas/:id",deleteEntrada);
router.get("/entradas/:titulo",getEntrada); 
router.get("/tres", getTresEntradas);
export default router;
