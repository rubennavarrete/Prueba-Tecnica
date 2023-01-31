import { Router } from "express";
import { createEntrada, deleteEntrada, getEntrada, getEntradas, updateEntrada , getEntradaTres} from "../controllers/entradas.controllers.js";
const router = Router();

router.get("/entradas", getEntradas);
router.post("/entradas", createEntrada);
router.put("/entradas/:id",updateEntrada);
router.delete("/entradas/:id",deleteEntrada);
router.get("/entradas/:titulo",getEntrada); 
router.get("/tres",getEntradaTres); 

export default router;
