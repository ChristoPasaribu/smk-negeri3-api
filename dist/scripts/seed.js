"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbUtils_1 = __importDefault(require("../utils/dbUtils"));
const HakAksesModel_1 = __importDefault(require("../models/HakAksesModel"));
async function seedDB() {
    try {
        await dbUtils_1.default.authenticate();
        console.log("Sedang melakukan penyemaian data...");
        const user_id = "693c22bf-8321-40fb-8571-6793d8b6acaf";
        await HakAksesModel_1.default.destroy({ where: { user_id: user_id } });
        await HakAksesModel_1.default.create({
            id: user_id,
            user_id: user_id,
            akses: "Admin",
        });
        console.log("- Data HakAkses berhasil dibuat.");
    }
    catch (error) {
        console.error("Gagal melakukan penyemaian database: ", error);
    }
    finally {
        await dbUtils_1.default.close();
    }
}
(async () => {
    await seedDB();
})();
//# sourceMappingURL=seed.js.map