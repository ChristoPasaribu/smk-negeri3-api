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
exports.MitraKerjasamaService = void 0;
const common_1 = require("@nestjs/common");
const MitraKerjaSamaModel_1 = __importDefault(require("../models/MitraKerjaSamaModel"));
let MitraKerjasamaService = class MitraKerjasamaService {
    async findAll() {
        return await MitraKerjaSamaModel_1.default.findAll();
    }
    async findOne(id) {
        const data = await MitraKerjaSamaModel_1.default.findByPk(id);
        if (!data)
            throw new common_1.NotFoundException('Data mitra kerjasama tidak ditemukan');
        return data;
    }
    async create(dto, logoPath) {
        return await MitraKerjaSamaModel_1.default.create({ ...dto, logo: logoPath });
    }
    async update(id, dto, logoPath) {
        const data = await this.findOne(id);
        return await data.update({ ...dto, ...(logoPath && { logo: logoPath }) });
    }
    async remove(id) {
        const data = await this.findOne(id);
        await data.destroy();
        return { message: 'Data berhasil dihapus' };
    }
};
exports.MitraKerjasamaService = MitraKerjasamaService;
exports.MitraKerjasamaService = MitraKerjasamaService = __decorate([
    (0, common_1.Injectable)()
], MitraKerjasamaService);
//# sourceMappingURL=mitra-kerjasama.service.js.map