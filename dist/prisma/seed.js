"use strict";
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
var database_1 = require("../src/config/database");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var termList, categoryList, teacherList, disciplineList, teacherDisciplineList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    termList = [
                        { number: 1 },
                        { number: 2 },
                        { number: 3 },
                        { number: 4 },
                        { number: 5 },
                        { number: 6 }
                    ];
                    return [4 /*yield*/, database_1.prisma.terms.upsert({
                            where: { number: termList[0].number },
                            update: {},
                            create: termList[0]
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.terms.upsert({
                            where: { number: termList[1].number },
                            update: {},
                            create: termList[1]
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.terms.upsert({
                            where: { number: termList[2].number },
                            update: {},
                            create: termList[2]
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.terms.upsert({
                            where: { number: termList[3].number },
                            update: {},
                            create: termList[3]
                        })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.terms.upsert({
                            where: { number: termList[4].number },
                            update: {},
                            create: termList[4]
                        })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.terms.upsert({
                            where: { number: termList[5].number },
                            update: {},
                            create: termList[5]
                        })];
                case 6:
                    _a.sent();
                    categoryList = [
                        { name: "Projeto" },
                        { name: "Prática" },
                        { name: "Recuperação" },
                        { name: "P1" },
                        { name: "P2" },
                        { name: "P3" },
                        { name: "PF" }
                    ];
                    return [4 /*yield*/, database_1.prisma.categories.upsert({
                            where: { name: categoryList[0].name },
                            update: {},
                            create: categoryList[0]
                        })];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.categories.upsert({
                            where: { name: categoryList[1].name },
                            update: {},
                            create: categoryList[1]
                        })];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.categories.upsert({
                            where: { name: categoryList[2].name },
                            update: {},
                            create: categoryList[2]
                        })];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.categories.upsert({
                            where: { name: categoryList[3].name },
                            update: {},
                            create: categoryList[3]
                        })];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.categories.upsert({
                            where: { name: categoryList[4].name },
                            update: {},
                            create: categoryList[4]
                        })];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.categories.upsert({
                            where: { name: categoryList[5].name },
                            update: {},
                            create: categoryList[5]
                        })];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.categories.upsert({
                            where: { name: categoryList[6].name },
                            update: {},
                            create: categoryList[6]
                        })];
                case 13:
                    _a.sent();
                    teacherList = [
                        { name: "Diego Pinho" },
                        { name: "Bruna Hamori" },
                        { name: "Leandro Simões" },
                        { name: "Marina de Cuffa" },
                        { name: "Frank Rocha" },
                        { name: "Erick Silva" }
                    ];
                    return [4 /*yield*/, database_1.prisma.teachers.upsert({
                            where: { name: teacherList[0].name },
                            update: {},
                            create: teacherList[0]
                        })];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.teachers.upsert({
                            where: { name: teacherList[1].name },
                            update: {},
                            create: teacherList[1]
                        })];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.teachers.upsert({
                            where: { name: teacherList[2].name },
                            update: {},
                            create: teacherList[2]
                        })];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.teachers.upsert({
                            where: { name: teacherList[3].name },
                            update: {},
                            create: teacherList[3]
                        })];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.teachers.upsert({
                            where: { name: teacherList[4].name },
                            update: {},
                            create: teacherList[4]
                        })];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.teachers.upsert({
                            where: { name: teacherList[5].name },
                            update: {},
                            create: teacherList[5]
                        })];
                case 19:
                    _a.sent();
                    disciplineList = [
                        { name: "HTML e CSS", termId: 1 },
                        { name: "JavaScript", termId: 2 },
                        { name: "React", termId: 3 },
                        { name: "Humildade", termId: 1 },
                        { name: "Planejamento", termId: 2 },
                        { name: "Autoconfiança", termId: 3 }
                    ];
                    return [4 /*yield*/, database_1.prisma.disciplines.upsert({
                            where: { name: disciplineList[0].name },
                            update: {},
                            create: disciplineList[0]
                        })];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.disciplines.upsert({
                            where: { name: disciplineList[1].name },
                            update: {},
                            create: disciplineList[1]
                        })];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.disciplines.upsert({
                            where: { name: disciplineList[2].name },
                            update: {},
                            create: disciplineList[2]
                        })];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.disciplines.upsert({
                            where: { name: disciplineList[3].name },
                            update: {},
                            create: disciplineList[3]
                        })];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.disciplines.upsert({
                            where: { name: disciplineList[4].name },
                            update: {},
                            create: disciplineList[4]
                        })];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.disciplines.upsert({
                            where: { name: disciplineList[5].name },
                            update: {},
                            create: disciplineList[5]
                        })];
                case 25:
                    _a.sent();
                    teacherDisciplineList = [
                        { teacherId: 1, disciplineId: 1 },
                        { teacherId: 3, disciplineId: 2 },
                        { teacherId: 6, disciplineId: 3 },
                        { teacherId: 4, disciplineId: 4 },
                        { teacherId: 5, disciplineId: 5 },
                        { teacherId: 2, disciplineId: 6 }
                    ];
                    return [4 /*yield*/, database_1.prisma.teacherDisciplines.upsert({
                            where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[0].teacherId, disciplineId: teacherDisciplineList[0].disciplineId } },
                            update: {},
                            create: teacherDisciplineList[0]
                        })];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.teacherDisciplines.upsert({
                            where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[1].teacherId, disciplineId: teacherDisciplineList[1].disciplineId } },
                            update: {},
                            create: teacherDisciplineList[1]
                        })];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.teacherDisciplines.upsert({
                            where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[2].teacherId, disciplineId: teacherDisciplineList[2].disciplineId } },
                            update: {},
                            create: teacherDisciplineList[2]
                        })];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.teacherDisciplines.upsert({
                            where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[3].teacherId, disciplineId: teacherDisciplineList[3].disciplineId } },
                            update: {},
                            create: teacherDisciplineList[3]
                        })];
                case 29:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.teacherDisciplines.upsert({
                            where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[4].teacherId, disciplineId: teacherDisciplineList[4].disciplineId } },
                            update: {},
                            create: teacherDisciplineList[4]
                        })];
                case 30:
                    _a.sent();
                    return [4 /*yield*/, database_1.prisma.teacherDisciplines.upsert({
                            where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[5].teacherId, disciplineId: teacherDisciplineList[5].disciplineId } },
                            update: {},
                            create: teacherDisciplineList[5]
                        })];
                case 31:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()["catch"](function (e) {
    console.log(e);
    process.exit(1);
})["finally"](function () {
    database_1.prisma.$disconnect();
});
