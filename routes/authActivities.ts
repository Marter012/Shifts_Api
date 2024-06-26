import { Router } from "express";
import { check } from "express-validator";
import { collectErrors } from "../middlewares/collectErrors";
import {
  addActivityControllers,
  cancelActivityControllers,
  getActivitiesControllers,
  updateActivityControllers,
} from "../controllers/authActivitiesControllers";

const router = Router();

router.get("/getActivities", getActivitiesControllers);

router.post(
  "/addActivity",
  [
    check("name", "El nombre es obligatorio.").not().isEmpty(),
    check("cost", "El costo es obligatorio.").not().isEmpty(),
    check("finalPrice", "El precio final es obligatorio.").not().isEmpty(),
    check("netIncome", "La ganancia neta es obligatoria.").not().isEmpty(),
    collectErrors,
  ],
  addActivityControllers
);

router.post(
  "/cancelActivity",
  [
    check("code", "Error al recibir el codigo de identificacion.")
      .not()
      .isEmpty(),
    collectErrors,
  ],
  cancelActivityControllers
);

router.post(
  "/updateActivity",
  [
    check("code", "Error al recibir el codigo de identificacion.")
      .not()
      .isEmpty(),
    check("name", "El nombre es obligatorio.").not().isEmpty(),
    check("cost", "El costo es obligatorio.").not().isEmpty(),
    check("finalPrice", "El precio final es obligatorio.").not().isEmpty(),
    check("netIncome", "La ganancia neta es obligatoria.").not().isEmpty(),
    collectErrors,
  ],
  updateActivityControllers
);
export default router;
