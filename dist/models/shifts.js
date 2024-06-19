"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ShiftsSchema = new mongoose_1.Schema({
    date: {
        type: String,
        required: true,
    },
    schedule: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    activity: {
        type: String,
        required: true,
    },
    code: {
        type: String,
    },
    state: {
        type: Boolean,
        default: true,
    },
});
exports.ShiftsSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v, _id } = _a, shifts = __rest(_a, ["__v", "_id"]);
    return shifts;
};
const Shifts = (0, mongoose_1.model)("Shifts", exports.ShiftsSchema);
exports.default = Shifts;
