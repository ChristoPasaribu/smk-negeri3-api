"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MitraKerjasamaModule = void 0;
const common_1 = require("@nestjs/common");
const mitra_kerjasama_controller_1 = require("./mitra-kerjasama.controller");
const mitra_kerjasama_service_1 = require("./mitra-kerjasama.service");
let MitraKerjasamaModule = class MitraKerjasamaModule {
};
exports.MitraKerjasamaModule = MitraKerjasamaModule;
exports.MitraKerjasamaModule = MitraKerjasamaModule = __decorate([
    (0, common_1.Module)({
        controllers: [mitra_kerjasama_controller_1.MitraKerjasamaController],
        providers: [mitra_kerjasama_service_1.MitraKerjasamaService],
    })
], MitraKerjasamaModule);
//# sourceMappingURL=mitra-kerjasama.module.js.map