"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControllers_1 = require("../controllers/authControllers");
const express_validator_1 = require("express-validator");
const collectErrors_1 = require("../middlewares/collectErrors");
const router = (0, express_1.Router)();
router.post("/getShifts", [
    (0, express_validator_1.check)("category", "Error al recibir categoria.").not().isEmpty(),
    (0, express_validator_1.check)("date", "La fecha es obligatoria.").not().isEmpty(),
    (0, express_validator_1.check)("state", "La fecha es obligatoria.").not().isEmpty(),
    collectErrors_1.collectErrors,
], authControllers_1.getShiftsControllers);
router.post("/addShifts", [
    (0, express_validator_1.check)("category", "Error al recibir categoria.").not().isEmpty(),
    (0, express_validator_1.check)("date", "La fecha es obligatoria.").not().isEmpty(),
    (0, express_validator_1.check)("schedule", "El horario es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("name", "El nombre es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("price", "El precio es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("location", "La ubicacion es obligatoria.").not().isEmpty(),
    (0, express_validator_1.check)("phone", "El celular es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("activity", "La actividad es obligatoria.").not().isEmpty(),
    collectErrors_1.collectErrors,
], authControllers_1.addShiftsControllers);
router.post("/cancelShifts", [
    (0, express_validator_1.check)("code", "Error al recibir el codigo de identificacion.")
        .not()
        .isEmpty(),
    collectErrors_1.collectErrors,
], authControllers_1.cancelShiftsControllers);
exports.default = router;
