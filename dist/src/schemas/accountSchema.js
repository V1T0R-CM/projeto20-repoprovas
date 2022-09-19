"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.loginSchema = exports.registerSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.registerSchema = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().min(10).required(),
    passwordConfirmation: joi_1["default"].string().min(10).required()
});
exports.loginSchema = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().min(10).required()
});
