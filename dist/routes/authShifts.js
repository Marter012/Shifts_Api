"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authShiftsControllers_1 = require("../controllers/authShiftsControllers");
const express_validator_1 = require("express-validator");
const collectErrors_1 = require("../middlewares/collectErrors");
const router = (0, express_1.Router)();
router.get("/getShifts", authShiftsControllers_1.getShiftsControllers);
router.post("/addShifts", [
    (0, express_validator_1.check)("date", "La fecha es obligatoria.").not().isEmpty(),
    (0, express_validator_1.check)("schedule", "El horario es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("name", "El nombre es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("price", "El precio es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("location", "La ubicacion es obligatoria.").not().isEmpty(),
    (0, express_validator_1.check)("phone", "El celular es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("activity", "La actividad es obligatoria.").not().isEmpty(),
    collectErrors_1.collectErrors,
], authShiftsControllers_1.addShiftsControllers);
router.post("/cancelShifts", [
    (0, express_validator_1.check)("code", "Error al recibir el codigo de identificacion.")
        .not()
        .isEmpty(),
    collectErrors_1.collectErrors,
], authShiftsControllers_1.cancelShiftsControllers);
router.post("/updateShifts", [
    (0, express_validator_1.check)("code", "Error al recibir el codigo de identificacion.")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("date", "La fecha es obligatoria.").not().isEmpty(),
    (0, express_validator_1.check)("schedule", "El horario es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("name", "El nombre es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("price", "El precio es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("location", "La ubicacion es obligatoria.").not().isEmpty(),
    (0, express_validator_1.check)("phone", "El celular es obligatorio.").not().isEmpty(),
    (0, express_validator_1.check)("activity", "La actividad es obligatoria.").not().isEmpty(),
    collectErrors_1.collectErrors,
], authShiftsControllers_1.updateShiftsControllers);
exports.default = router;
