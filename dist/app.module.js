"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sejarah_identitas_module_1 = require("./sejarah-identitas/sejarah-identitas.module");
const visi_misi_module_1 = require("./visi-misi/visi-misi.module");
const struktur_organisasi_module_1 = require("./struktur-organisasi/struktur-organisasi.module");
const fasilitas_module_1 = require("./fasilitas/fasilitas.module");
const prestasi_module_1 = require("./prestasi/prestasi.module");
const program_keahlian_module_1 = require("./program-keahlian/program-keahlian.module");
const mitra_kerjasama_module_1 = require("./mitra-kerjasama/mitra-kerjasama.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            sejarah_identitas_module_1.SejarahIdentitasModule,
            visi_misi_module_1.VisiMisiModule,
            struktur_organisasi_module_1.StrukturOrganisasiModule,
            fasilitas_module_1.FasilitasModule,
            prestasi_module_1.PrestasiModule,
            program_keahlian_module_1.ProgramKeahlianModule,
            mitra_kerjasama_module_1.MitraKerjasamaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map