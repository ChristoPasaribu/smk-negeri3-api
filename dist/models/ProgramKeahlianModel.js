"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbUtils_1 = __importDefault(require("../utils/dbUtils"));
const TABLE_NAME = "m_program_keahlian";
const DataModel = dbUtils_1.default.define(TABLE_NAME, {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    nama_jurusan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    deskripsi: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    icon: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: TABLE_NAME,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
});
exports.default = DataModel;
//# sourceMappingURL=ProgramKeahlianModel.js.map