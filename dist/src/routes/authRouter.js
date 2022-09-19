"use strict";
exports.__esModule = true;
var express_1 = require("express");
var authControllers_1 = require("../controllers/authControllers");
var authMiddlewares_1 = require("../middlewares/authMiddlewares");
var authRouter = (0, express_1.Router)();
authRouter.post("/signup", authMiddlewares_1.registerValidation, authControllers_1.signUp);
authRouter.post("/signin", authMiddlewares_1.loginValidation, authControllers_1.signIn);
exports["default"] = authRouter;
