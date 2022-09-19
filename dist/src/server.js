"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var index_1 = __importDefault(require("./index"));
dotenv_1["default"].config();
var PORT = process.env.PORT || 5000;
index_1["default"].listen(PORT, function () { return console.log("Rodando na porta na porta: ".concat(PORT)); });
