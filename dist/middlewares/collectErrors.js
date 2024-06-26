"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectErrors = void 0;
const express_validator_1 = require("express-validator");
const collectErrors = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        res.status(400).json({
            errors,
            mau: "hola"
        });
    }
    else {
        next();
    }
};
exports.collectErrors = collectErrors;
