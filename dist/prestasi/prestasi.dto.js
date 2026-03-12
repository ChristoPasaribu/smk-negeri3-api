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
exports.UpdatePrestasiDto = exports.CreatePrestasiDto = void 0;
const class_validator_1 = require("class-validator");
class CreatePrestasiDto {
    judul;
    tingkat;
    tahun;
    keterangan;
}
exports.CreatePrestasiDto = CreatePrestasiDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePrestasiDto.prototype, "judul", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['kabupaten', 'provinsi', 'nasional', 'internasional']),
    __metadata("design:type", String)
], CreatePrestasiDto.prototype, "tingkat", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePrestasiDto.prototype, "tahun", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePrestasiDto.prototype, "keterangan", void 0);
class UpdatePrestasiDto {
    judul;
    tingkat;
    tahun;
    keterangan;
}
exports.UpdatePrestasiDto = UpdatePrestasiDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePrestasiDto.prototype, "judul", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['kabupaten', 'provinsi', 'nasional', 'internasional']),
    __metadata("design:type", String)
], UpdatePrestasiDto.prototype, "tingkat", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePrestasiDto.prototype, "tahun", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePrestasiDto.prototype, "keterangan", void 0);
//# sourceMappingURL=prestasi.dto.js.map