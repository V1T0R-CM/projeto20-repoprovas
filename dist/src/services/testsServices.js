"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.__esModule = true;
exports.getTestsByTeachers = exports.getTestsByDiscipline = exports.registerTests = void 0;
var categoryRepositories = __importStar(require("../repositories/categoryRepositories"));
var teacherRepositories = __importStar(require("../repositories/teacherRepositories"));
var disciplineRepositories = __importStar(require("../repositories/disciplineRepositories"));
var teacherDisciplineRepositories = __importStar(require("../repositories/teacherDisciplineRepositories"));
var termsRepositories = __importStar(require("../repositories/termsRepositories"));
var testRepositories = __importStar(require("../repositories/testRepositories"));
function registerTests(createTestsData) {
    return __awaiter(this, void 0, void 0, function () {
        var category, teacher, discipline, teacherDiscipline;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, categoryRepositories.getByName(createTestsData.category)];
                case 1:
                    category = _a.sent();
                    return [4 /*yield*/, teacherRepositories.getByName(createTestsData.teacher)];
                case 2:
                    teacher = _a.sent();
                    return [4 /*yield*/, disciplineRepositories.getByName(createTestsData.discipline)];
                case 3:
                    discipline = _a.sent();
                    if (!category)
                        throw { code: "NotFound", message: "Esta categoria não esta registrada" };
                    if (!teacher)
                        throw { code: "NotFound", message: "Este professor(a) não esta registrado(a)" };
                    if (!discipline)
                        throw { code: "NotFound", message: "Esta disciplina não esta registrado" };
                    return [4 /*yield*/, teacherDisciplineRepositories.getByTeacherIdAndDisciplineId(teacher.id, discipline.id)];
                case 4:
                    teacherDiscipline = _a.sent();
                    if (!teacherDiscipline)
                        throw { code: "BadRequest", message: "Esta disciplina não dada pro esse professor" };
                    return [4 /*yield*/, testRepositories.insert({ name: createTestsData.name, pdfUrl: createTestsData.pdfUrl, categoryId: category.id, teacherDisciplineId: teacherDiscipline.id })];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.registerTests = registerTests;
function getTestsByDiscipline() {
    return __awaiter(this, void 0, void 0, function () {
        var terms, categories;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, termsRepositories.getAllTermsDisciplines()];
                case 1:
                    terms = _a.sent();
                    return [4 /*yield*/, categoryRepositories.getAllCategoryTests()];
                case 2:
                    categories = _a.sent();
                    return [2 /*return*/, Promise.all(terms.map(function (term) { return __awaiter(_this, void 0, void 0, function () {
                            var result;
                            return __generator(this, function (_a) {
                                result = {
                                    id: term.id,
                                    number: term.number,
                                    disciplines: term.Disciplines.map(function (discipline) {
                                        return {
                                            id: discipline.id,
                                            name: discipline.name,
                                            categories: categories.map(function (category) {
                                                return {
                                                    id: category.id,
                                                    category: category.name,
                                                    tests: category.Tests.flatMap(function (test) {
                                                        if (test.TeacherDisciplines.disciplineId === discipline.id) {
                                                            return {
                                                                id: test.id,
                                                                name: test.name,
                                                                pdfUrl: test.pdfUrl
                                                            };
                                                        }
                                                        else {
                                                            return [];
                                                        }
                                                    })
                                                };
                                            })
                                        };
                                    })
                                };
                                return [2 /*return*/, result];
                            });
                        }); }))];
            }
        });
    });
}
exports.getTestsByDiscipline = getTestsByDiscipline;
function getTestsByTeachers() {
    return __awaiter(this, void 0, void 0, function () {
        var teachers;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, teacherRepositories.getAll()];
                case 1:
                    teachers = _a.sent();
                    return [4 /*yield*/, Promise.all(teachers.map(function (teacher) { return __awaiter(_this, void 0, void 0, function () {
                            var teacherTests;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, testRepositories.getAllByTeacherId(teacher.id)];
                                    case 1:
                                        teacherTests = _a.sent();
                                        return [2 /*return*/, __assign(__assign({}, teacher), { tests: teacherTests })];
                                }
                            });
                        }); }))];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getTestsByTeachers = getTestsByTeachers;
