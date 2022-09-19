"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
require("express-async-errors");
var errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
var index_1 = __importDefault(require("./routes/index"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(index_1["default"]);
app.use(errorHandler_1["default"]);
exports["default"] = app;
