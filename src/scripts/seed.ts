import db from "../utils/dbUtils";
import HakAksesModel from "../models/HakAksesModel";

async function seedDB(): Promise<void> {
  try {
    await db.authenticate();
    console.log("Sedang melakukan penyemaian data...");
    // 1. SEED HAK AKSES (Existing Code)
    const user_id = "693c22bf-8321-40fb-8571-6793d8b6acaf";
    await HakAksesModel.destroy({ where: { user_id: user_id } });
    await HakAksesModel.create({
      id: user_id,
      user_id: user_id,
      akses: "Admin",
    });
    console.log("- Data HakAkses berhasil dibuat.");
  } catch (error) {
    console.error("Gagal melakukan penyemaian database: ", error);
  } finally {
    await db.close();
  }
}

(async () => {
  await seedDB();
})();
