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
exports.ActivitiesSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ActivitiesSchema = new mongoose_1.Schema({
    code: {
        type: Number,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    finalPrice: {
        type: Number,
        required: true,
    },
    netIncome: {
        type: Number,
        required: true,
    },
    state: {
        type: Boolean,
        default: true,
    },
});
exports.ActivitiesSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v, _id } = _a, activities = __rest(_a, ["__v", "_id"]);
    return activities;
};
const Activities = (0, mongoose_1.model)("Activities", exports.ActivitiesSchema);
exports.default = Activities;
