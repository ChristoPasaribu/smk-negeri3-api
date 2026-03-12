import { DataTypes } from "sequelize";
import db from "../utils/dbUtils";

const TABLE_NAME = "m_sejarah_identitas";
const DataModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    tahun_berdiri: {
      type: DataTypes.STRING,
      allowNull: true,
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