"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrukturOrganisasiService = void 0;
const common_1 = require("@nestjs/common");
const StrukturOrganisasiModel_1 = __importDefault(require("../models/StrukturOrganisasiModel"));
let StrukturOrganisasiService = class StrukturOrganisasiService {
    async findAll() {
        return await StrukturOrganisasiModel_1.default.findAll();
    }
    async findOne(id) {
        const data = await StrukturOrganisasiModel_1.default.findByPk(id);
        if (!data)
            throw new common_1.NotFoundException('Data struktur organisasi tidak ditemukan');
        return data;
    }
    async create(gambar) {
        return await StrukturOrganisasiModel_1.default.create({ gambar });
    }
    async update(id, gambar) {
        const data = await this.findOne(id);
        return await data.update({ gambar });
    }
    async remove(id) {
        const data = await this.findOne(id);
        await data.destroy();
        return { message: 'Data berhasil dihapus' };
    }
};
exports.StrukturOrganisasiService = StrukturOrganisasiService;
exports.StrukturOrganisasiService = StrukturOrganisasiService = __decorate([
    (0, common_1.Injectable)()
], StrukturOrganisasiService);
//# sourceMappingURL=struktur-organisasi.service.js.map