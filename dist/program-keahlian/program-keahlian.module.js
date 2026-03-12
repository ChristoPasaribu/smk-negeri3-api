"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramKeahlianModule = void 0;
const common_1 = require("@nestjs/common");
const program_keahlian_controller_1 = require("./program-keahlian.controller");
const program_keahlian_service_1 = require("./program-keahlian.service");
let ProgramKeahlianModule = class ProgramKeahlianModule {
};
exports.ProgramKeahlianModule = ProgramKeahlianModule;
exports.ProgramKeahlianModule = ProgramKeahlianModule = __decorate([
    (0, common_1.Module)({
        controllers: [program_keahlian_controller_1.ProgramKeahlianController],
        providers: [program_keahlian_service_1.ProgramKeahlianService],
    })
], ProgramKeahlianModule);
//# sourceMappingURL=program-keahlian.module.js.map