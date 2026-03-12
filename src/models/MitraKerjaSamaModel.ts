import { DataTypes } from "sequelize";
import db from "../utils/dbUtils";

const TABLE_NAME = "m_mitra_kerjasama";
const DataModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nama_mitra: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: TABLE_NAME,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default DataModel;