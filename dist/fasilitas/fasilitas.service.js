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
exports.FasilitasService = void 0;
const common_1 = require("@nestjs/common");
const FasilitasModel_1 = __importDefault(require("../models/FasilitasModel"));
let FasilitasService = class FasilitasService {
    async findAll() {
        return await FasilitasModel_1.default.findAll();
    }
    async findOne(id) {
        const data = await FasilitasModel_1.default.findByPk(id);
        if (!data)
            throw new common_1.NotFoundException('Data fasilitas tidak ditemukan');
        return data;
    }
    async create(dto, fotoPath) {
        return await FasilitasModel_1.default.create({ ...dto, foto: fotoPath });
    }
    async update(id, dto, fotoPath) {
        const data = await this.findOne(id);
        return await data.update({ ...dto, ...(fotoPath && { foto: fotoPath }) });
    }
    async remove(id) {
        const data = await this.findOne(id);
        await data.destroy();
        return { message: 'Data berhasil dihapus' };
    }
};
exports.FasilitasService = FasilitasService;
exports.FasilitasService = FasilitasService = __decorate([
    (0, common_1.Injectable)()
], FasilitasService);
//# sourceMappingURL=fasilitas.service.js.map