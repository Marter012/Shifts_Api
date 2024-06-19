"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateShiftsControllers = exports.cancelShiftsControllers = exports.addShiftsControllers = exports.getShiftsControllers = void 0;
const randomstring_1 = __importDefault(require("randomstring"));
const shifts_1 = __importDefault(require("../models/shifts"));
const getShiftsControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shifts = yield shifts_1.default.find().exec();
        if (shifts.length === 0) {
            res.status(404).json({
                msg: "No se encontraron turnos en la base de datos.",
            });
            return;
        }
        res.status(200).json({
            shifts,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Error en el servidor.",
        });
    }
});
exports.getShiftsControllers = getShiftsControllers;
const addShiftsControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, schedule, name, price, location, phone, activity } = req.body;
    const shift = new shifts_1.default({
        date,
        schedule,
        name,
        price,
        location,
        phone,
        activity,
    });
    const newCode = randomstring_1.default.generate(6);
    shift.code = newCode;
    yield shift.save();
    res.status(201).json({
        shift,
    });
});
exports.addShiftsControllers = addShiftsControllers;
const cancelShiftsControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.body;
    try {
        const shift = yield shifts_1.default.findOne({ code });
        if (!shift) {
            res.status(404).json({
                msg: "No se encontro el turno en la base de datos.",
            });
            return;
        }
        if (code !== shift.code) {
            res.status(401).json({
                msg: "El codigo ingresado no es correcto",
            });
            return;
        }
        yield shifts_1.default.findOneAndUpdate({ code }, { state: false });
        res.status(200).json({
            msg: "Turno cancelado con exito",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en el servidor.",
        });
    }
});
exports.cancelShiftsControllers = cancelShiftsControllers;
const updateShiftsControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, date, schedule, name, price, location, phone, activity, } = req.body;
    try {
        const shift = yield shifts_1.default.findOne({ code });
        if (!shift) {
            res.status(404).json({
                msg: "No se encontro el turno en la base de datos.",
            });
            return;
        }
        if (code !== shift.code) {
            res.status(401).json({
                msg: "El codigo ingresado no es correcto",
            });
            return;
        }
        yield shifts_1.default.findOneAndUpdate({ code }, { date, schedule, name, price, location, phone, activity });
        res.status(200).json({
            msg: "Turno actualizado con exito",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en el servidor.",
        });
    }
});
exports.updateShiftsControllers = updateShiftsControllers;
