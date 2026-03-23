"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FasilitasController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const fasilitas_service_1 = require("./fasilitas.service");
const fasilitas_dto_1 = require("./fasilitas.dto");
const toolsUtil_1 = require("../utils/toolsUtil");
const multerOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads/fasilitas',
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, `fasilitas-${uniqueSuffix}${(0, path_1.extname)(file.originalname)}`);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
            return cb(new common_1.BadRequestException('Hanya file gambar yang diperbolehkan'), false);
        }
        cb(null, true);
    },
};
let FasilitasController = class FasilitasController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(dto, file) {
        return this.service.create(dto, file ? (0, toolsUtil_1.normalizePath)(file.path) : undefined);
    }
    update(id, dto, file) {
        return this.service.update(id, dto, file ? (0, toolsUtil_1.normalizePath)(file.path) : undefined);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.FasilitasController = FasilitasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FasilitasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FasilitasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('foto', multerOptions)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fasilitas_dto_1.CreateFasilitasDto, Object]),
    __metadata("design:returntype", void 0)
], FasilitasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('foto', multerOptions)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, fasilitas_dto_1.UpdateFasilitasDto, Object]),
    __metadata("design:returntype", void 0)
], FasilitasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FasilitasController.prototype, "remove", null);
exports.FasilitasController = FasilitasController = __decorate([
    (0, common_1.Controller)('fasilitas'),
    __metadata("design:paramtypes", [fasilitas_service_1.FasilitasService])
], FasilitasController);
//# sourceMappingURL=fasilitas.controller.js.map