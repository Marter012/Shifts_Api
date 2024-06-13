"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const collectErrors_1 = require("../middlewares/collectErrors");
const authActivitiesControllers_1 = require("../controllers/authActivitiesControllers");
const router = (0, express_1.Router)();
router.post("/getActivities", [
    (0, express_validator_1.check)("category", "Error al recibir categoria.").not().isEmpty(),
    collectErrors_1.collectErrors,
], authActivitiesControllers_1.getActivitiesControllers);
router.post("/addActivity", [
    (0, express_validator_1.check)("category", "Error al recibir categoria.").not().isEmpty(),
    (0, express_validator_1.check)("code", "El codigo es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("name", "El nombre es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("cost", "El costo es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("finalPrice", "El precio final es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("netIncome", "La ganancia neta es obligatoria.").not().isEmpty(),
    collectErrors_1.collectErrors,
], authActivitiesControllers_1.addActivityControllers);
router.post("/cancelActivity", [
    (0, express_validator_1.check)("code", "Error al recibir el codigo de identificacion.")
        .not()
        .isEmpty(),
    collectErrors_1.collectErrors,
], authActivitiesControllers_1.cancelActivityControllers);
router.post("/updateActivity", [
    (0, express_validator_1.check)("code", "Error al recibir el codigo de identificacion.")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("category", "Error al recibir categoria.").not().isEmpty(),
    (0, express_validator_1.check)("name", "El nombre es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("cost", "El costo es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("finalPrice", "El precio final es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("netIncome", "La ganancia neta es obligatoria.").not().isEmpty(),
    collectErrors_1.collectErrors,
], authActivitiesControllers_1.updateActivityControllers);
exports.default = router;
