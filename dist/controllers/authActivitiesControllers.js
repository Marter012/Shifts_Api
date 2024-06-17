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
exports.updateActivityControllers = exports.cancelActivityControllers = exports.addActivityControllers = exports.getActivitiesControllers = void 0;
const activities_1 = __importDefault(require("../models/activities"));
const getActivitiesControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.body;
    try {
        const activities = yield activities_1.default.find({ category }).exec();
        if (activities.length === 0) {
            res.status(404).json({
                msg: "No se encontraron actividades en la base de datos.",
            });
            return;
        }
        res.status(200).json({
            activities,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Error en el servidor.",
        });
    }
});
exports.getActivitiesControllers = getActivitiesControllers;
const addActivityControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, name, cost, finalPrice, netIncome } = req.body;
    try {
        const activity = new activities_1.default({
            category,
            code: 0,
            name,
            cost,
            finalPrice,
            netIncome,
        });
        const newCode = Math.floor(Math.random() * 999) + 101;
        activity.cost = newCode;
        yield activity.save();
        res.status(201).json({
            activity,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Error en el servidor.",
        });
    }
});
exports.addActivityControllers = addActivityControllers;
const cancelActivityControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.body;
    try {
        const activity = yield activities_1.default.findOne({ code });
        if (!activity) {
            res.status(404).json({
                msg: "No se encontro la actividad en la base de datos.",
            });
            return;
        }
        if (code !== activity.code) {
            res.status(401).json({
                msg: "El codigo ingresado no es correcto",
            });
            return;
        }
        yield activities_1.default.findOneAndUpdate({ code }, { state: false });
        res.status(200).json({
            msg: "Actividad cancelada con exito",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en el servidor.",
        });
    }
});
exports.cancelActivityControllers = cancelActivityControllers;
const updateActivityControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, name, cost, finalPrice, netIncome } = req.body;
    try {
        const activity = yield activities_1.default.findOne({ code });
        if (!activity) {
            res.status(404).json({
                msg: "No se encontro la actividad en la base de datos.",
            });
            return;
        }
        if (code !== activity.code) {
            res.status(401).json({
                msg: "El codigo ingresado no es correcto",
            });
            return;
        }
        yield activities_1.default.findOneAndUpdate({ code }, { name, cost, finalPrice, netIncome });
        res.status(200).json({
            msg: "Actividad actualizada con exito",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en el servidor.",
        });
    }
});
exports.updateActivityControllers = updateActivityControllers;
