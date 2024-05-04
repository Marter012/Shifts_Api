import { Router } from "express";
import {
  addShiftsControllers,
  cancelShiftsControllers,
  getShiftsControllers,
} from "../controllers/authControllers";
import { check } from "express-validator";
import { collectErrors } from "../middlewares/collectErrors";

const router = Router();
router.post(
  "/getShifts",
  [
    check("category", "Error al recibir categoria.").not().isEmpty(),
    check("date", "La fecha es obligatoria.").not().isEmpty(),
    check("state", "La fecha es obligatoria.").not().isEmpty(),
    collectErrors,
  ],
  getShiftsControllers
);

router.post(
  "/addShifts",
  [
    check("category", "Error al recibir categoria.").not().isEmpty(),
    check("date", "La fecha es obligatoria.").not().isEmpty(),
    check("schedule", "El horario es obligatorio.").not().isEmpty(),
    check("name", "El nombre es obligatorio.").not().isEmpty(),
    check("price", "El precio es obligatorio.").not().isEmpty(),
    check("location", "La ubicacion es obligatoria.").not().isEmpty(),
    check("phone", "El celular es obligatorio.").not().isEmpty(),
    check("activity", "La actividad es obligatoria.").not().isEmpty(),
    collectErrors,
  ],
  addShiftsControllers
);
router.post(
  "/cancelShifts",
  [
    check("code", "Error al recibir el codigo de identificacion.")
      .not()
      .isEmpty(),
    collectErrors,
  ],
  cancelShiftsControllers
);

export default router;
