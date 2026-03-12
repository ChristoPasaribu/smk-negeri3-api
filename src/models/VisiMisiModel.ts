import { DataTypes } from "sequelize";
import db from "../utils/dbUtils";

const TABLE_NAME = "m_visi_misi";
const DataModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    tipe: {
      type: DataTypes.ENUM("visi", "misi"),
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false,
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