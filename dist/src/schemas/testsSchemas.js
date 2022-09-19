"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.testsSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.testsSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    pdfUrl: joi_1["default"].string().required(),
    category: joi_1["default"].string().required(),
    discipline: joi_1["default"].string().required(),
    teacher: joi_1["default"].string().required()
});
