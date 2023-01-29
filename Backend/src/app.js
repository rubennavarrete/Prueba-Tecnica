import express from "express";

import cors from "cors";

import entradasRoutes from "./routes/entradas.routes.js";
const app = express();

//configuraciones
//configuración
const whitelist = [
  "http://localhost:4000",
  "http://localhost:4200",
  "http://192.168.1.110:4000"
];

// en express se crean middlewares
app.use(express.json());

app.use(cors({ credentials: true, origin: whitelist }));


app.use(entradasRoutes);
export default app;
