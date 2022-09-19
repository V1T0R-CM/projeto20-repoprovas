"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var authRouter_1 = __importDefault(require("./authRouter"));
var testsRouter_1 = __importDefault(require("./testsRouter"));
var router = (0, express_1.Router)();
router.use(authRouter_1["default"]);
router.use(testsRouter_1["default"]);
exports["default"] = router;
