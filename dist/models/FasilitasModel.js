"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbUtils_1 = __importDefault(require("../utils/dbUtils"));
const TABLE_NAME = "m_fasilitas";
const DataModel = dbUtils_1.default.define(TABLE_NAME, {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    nama_fasilitas: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    foto: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    deskripsi: {
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
//# sourceMappingURL=FasilitasModel.js.map