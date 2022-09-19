"use strict";
exports.__esModule = true;
exports.testsValidation = void 0;
var testsSchemas_1 = require("../schemas/testsSchemas");
function testsValidation(req, res, next) {
    var validation = testsSchemas_1.testsSchema.validate(req.body);
    if (validation.error)
        throw { code: "BadRequest", message: validation.error.message };
    next();
}
exports.testsValidation = testsValidation;
