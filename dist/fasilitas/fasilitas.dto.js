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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFasilitasDto = exports.CreateFasilitasDto = void 0;
const class_validator_1 = require("class-validator");
class CreateFasilitasDto {
    nama_fasilitas;
    deskripsi;
}
exports.CreateFasilitasDto = CreateFasilitasDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFasilitasDto.prototype, "nama_fasilitas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFasilitasDto.prototype, "deskripsi", void 0);
class UpdateFasilitasDto {
    nama_fasilitas;
    deskripsi;
}
exports.UpdateFasilitasDto = UpdateFasilitasDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFasilitasDto.prototype, "nama_fasilitas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFasilitasDto.prototype, "deskripsi", void 0);
//# sourceMappingURL=fasilitas.dto.js.map