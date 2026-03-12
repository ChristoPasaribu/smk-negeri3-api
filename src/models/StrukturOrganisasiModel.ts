import { DataTypes } from "sequelize";
import db from "../utils/dbUtils";

const TABLE_NAME = "m_struktur_organisasi";
const StrukturOrganisasiModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    gambar: {
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

export default StrukturOrganisasiModel;