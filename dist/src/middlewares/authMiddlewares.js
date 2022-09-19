"use strict";
exports.__esModule = true;
exports.loginValidation = exports.registerValidation = void 0;
var accountSchema_1 = require("../schemas/accountSchema");
function registerValidation(req, res, next) {
    var validation = accountSchema_1.registerSchema.validate(req.body);
    if (validation.error)
        throw { code: "BadRequest", message: validation.error.message };
    if (req.body.passwordConfirmation !== req.body.password)
        throw { code: "BadRequest", message: "A senha e a confirmação não são iguais" };
    next();
}
exports.registerValidation = registerValidation;
function loginValidation(req, res, next) {
    var validation = accountSchema_1.loginSchema.validate(req.body);
    if (validation.error)
        throw { code: "BadRequest", message: validation.error.message };
    next();
}
exports.loginValidation = loginValidation;
