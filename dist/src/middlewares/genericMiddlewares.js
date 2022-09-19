"use strict";
exports.__esModule = true;
exports.tokenMiddlewareValidation = void 0;
var token_1 = require("../utils/token");
function tokenMiddlewareValidation(req, res, next) {
    var token = req.headers.authorization.replace("Bearer ", "");
    var account = (0, token_1.verifyToken)(token);
    if (!account)
        throw { code: "Unauthorized", message: "Token invalido" };
    res.locals.account = account;
    next();
}
exports.tokenMiddlewareValidation = tokenMiddlewareValidation;
