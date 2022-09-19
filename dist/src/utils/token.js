"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.verifyToken = exports.generateToken = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1["default"].config();
function generateToken(id, email) {
    try {
        var jwtSecretKey = process.env.JWT_SECRET_KEY;
        return jsonwebtoken_1["default"].sign({ id: id, email: email }, jwtSecretKey, { expiresIn: "1d" });
    }
    catch (_a) {
        return false;
    }
}
exports.generateToken = generateToken;
function verifyToken(token) {
    try {
        var jwtSecretKey = process.env.JWT_SECRET_KEY;
        return jsonwebtoken_1["default"].verify(token, jwtSecretKey);
    }
    catch (_a) {
        return false;
    }
}
exports.verifyToken = verifyToken;
