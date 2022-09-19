"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../src/index"));
var database_1 = require("../src/config/database");
var authFactory_1 = require("./factories/authFactory");
var testsFactory_1 = require("./factories/testsFactory");
beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.prisma.$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE \"Tests\""], ["TRUNCATE TABLE \"Tests\""])))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
describe('Teste rota POST /tests', function () {
    it("Deve criar uma prova e retornar status 201", function () { return __awaiter(void 0, void 0, void 0, function () {
        var regiterAccount, account, loginResult, token, test, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, authFactory_1.registerFactory)(10, true)];
                case 1:
                    regiterAccount = _a.sent();
                    return [4 /*yield*/, (0, authFactory_1.loginFactory)(regiterAccount.email, regiterAccount.password)];
                case 2:
                    account = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signup').send(regiterAccount)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signin').send(account)];
                case 4:
                    loginResult = _a.sent();
                    token = loginResult.body.token;
                    return [4 /*yield*/, (0, testsFactory_1.testsFactory)("P1", "React", "Erick Silva")];
                case 5:
                    test = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post("/tests").send(test).set({ authorization: "Bearer ".concat(token) })];
                case 6:
                    result = _a.sent();
                    expect(result.status).toBe(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Deve enviar uma categoria inexistente e retornar status 404", function () { return __awaiter(void 0, void 0, void 0, function () {
        var regiterAccount, account, loginResult, token, test, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, authFactory_1.registerFactory)(10, true)];
                case 1:
                    regiterAccount = _a.sent();
                    return [4 /*yield*/, (0, authFactory_1.loginFactory)(regiterAccount.email, regiterAccount.password)];
                case 2:
                    account = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signup').send(regiterAccount)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signin').send(account)];
                case 4:
                    loginResult = _a.sent();
                    token = loginResult.body.token;
                    return [4 /*yield*/, (0, testsFactory_1.testsFactory)("P4", "React", "Erick Silva")];
                case 5:
                    test = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post("/tests").send(test).set({ authorization: "Bearer ".concat(token) })];
                case 6:
                    result = _a.sent();
                    expect(result.status).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Deve enviar uma disciplina inexistente e retornar status 404", function () { return __awaiter(void 0, void 0, void 0, function () {
        var regiterAccount, account, loginResult, token, test, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, authFactory_1.registerFactory)(10, true)];
                case 1:
                    regiterAccount = _a.sent();
                    return [4 /*yield*/, (0, authFactory_1.loginFactory)(regiterAccount.email, regiterAccount.password)];
                case 2:
                    account = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signup').send(regiterAccount)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signin').send(account)];
                case 4:
                    loginResult = _a.sent();
                    token = loginResult.body.token;
                    return [4 /*yield*/, (0, testsFactory_1.testsFactory)("P1", "Express", "Erick Silva")];
                case 5:
                    test = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post("/tests").send(test).set({ authorization: "Bearer ".concat(token) })];
                case 6:
                    result = _a.sent();
                    expect(result.status).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Deve enviar um professor inexistente e retornar status 404", function () { return __awaiter(void 0, void 0, void 0, function () {
        var regiterAccount, account, loginResult, token, test, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, authFactory_1.registerFactory)(10, true)];
                case 1:
                    regiterAccount = _a.sent();
                    return [4 /*yield*/, (0, authFactory_1.loginFactory)(regiterAccount.email, regiterAccount.password)];
                case 2:
                    account = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signup').send(regiterAccount)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signin').send(account)];
                case 4:
                    loginResult = _a.sent();
                    token = loginResult.body.token;
                    return [4 /*yield*/, (0, testsFactory_1.testsFactory)("P1", "React", "Vitor Carvalho Matos")];
                case 5:
                    test = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post("/tests").send(test).set({ authorization: "Bearer ".concat(token) })];
                case 6:
                    result = _a.sent();
                    expect(result.status).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Deve enviar um professor e uma disciplina que não é ministrada por ele e retornar status 400", function () { return __awaiter(void 0, void 0, void 0, function () {
        var regiterAccount, account, loginResult, token, test, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, authFactory_1.registerFactory)(10, true)];
                case 1:
                    regiterAccount = _a.sent();
                    return [4 /*yield*/, (0, authFactory_1.loginFactory)(regiterAccount.email, regiterAccount.password)];
                case 2:
                    account = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signup').send(regiterAccount)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signin').send(account)];
                case 4:
                    loginResult = _a.sent();
                    token = loginResult.body.token;
                    return [4 /*yield*/, (0, testsFactory_1.testsFactory)("P1", "React", "Bruna Hamori")];
                case 5:
                    test = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post("/tests").send(test).set({ authorization: "Bearer ".concat(token) })];
                case 6:
                    result = _a.sent();
                    expect(result.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Teste rota GET disciplines/tests', function () {
    it("Deve retornar todas as provas separadas por disciplina e retornar status 200", function () { return __awaiter(void 0, void 0, void 0, function () {
        var regiterAccount, account, loginResult, token, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, authFactory_1.registerFactory)(10, true)];
                case 1:
                    regiterAccount = _a.sent();
                    return [4 /*yield*/, (0, authFactory_1.loginFactory)(regiterAccount.email, regiterAccount.password)];
                case 2:
                    account = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signup').send(regiterAccount)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signin').send(account)];
                case 4:
                    loginResult = _a.sent();
                    token = loginResult.body.token;
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).get("/disciplines/tests").set({ authorization: "Bearer ".concat(token) })];
                case 5:
                    result = _a.sent();
                    expect(result.status).toBe(200);
                    expect(result.body).toBeInstanceOf(Array);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Deve enviar um authorization invalido e retornar status 401", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = "TokenInvalido";
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).get("/disciplines/tests").set({ authorization: "Bearer ".concat(token) })];
                case 1:
                    result = _a.sent();
                    expect(result.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Teste rota GET teachers/tests', function () {
    it("Deve retornar todas as provas separadas por professores e retornar status 200", function () { return __awaiter(void 0, void 0, void 0, function () {
        var regiterAccount, account, loginResult, token, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, authFactory_1.registerFactory)(10, true)];
                case 1:
                    regiterAccount = _a.sent();
                    return [4 /*yield*/, (0, authFactory_1.loginFactory)(regiterAccount.email, regiterAccount.password)];
                case 2:
                    account = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signup').send(regiterAccount)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).post('/signin').send(account)];
                case 4:
                    loginResult = _a.sent();
                    token = loginResult.body.token;
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).get("/teachers/tests").set({ authorization: "Bearer ".concat(token) })];
                case 5:
                    result = _a.sent();
                    expect(result.status).toBe(200);
                    expect(result.body).toBeInstanceOf(Array);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Deve enviar um authorization invalido e retornar status 401", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = "TokenInvalido";
                    return [4 /*yield*/, (0, supertest_1["default"])(index_1["default"]).get("/teachers/tests").set({ authorization: "Bearer ".concat(token) })];
                case 1:
                    result = _a.sent();
                    expect(result.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
var templateObject_1;
