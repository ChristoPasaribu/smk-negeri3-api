import type { Model, ModelStatic } from "sequelize";

// Import all models here
import HakAksesModel from "./HakAksesModel";
import SejarahIdentitasModel from "./SejarahIdentitasModel";
import VisiMisiModel from "./VisiMisiModel";
import StrukturOrganisasiModel from "./StrukturOrganisasiModel";
import FasilitasModel from "./FasilitasModel";
import PrestasiModel from "./PrestasiModel";
import ProgramKeahlianModel from "./ProgramKeahlianModel";
import MitraKerjaSamaModel from "./MitraKerjaSamaModel";

const models: ModelStatic<Model>[] = [
  HakAksesModel,
  SejarahIdentitasModel,
  VisiMisiModel,
  StrukturOrganisasiModel,
  FasilitasModel,
  PrestasiModel,
  ProgramKeahlianModel,
  MitraKerjaSamaModel,
];

export default models;