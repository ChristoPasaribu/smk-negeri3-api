"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const dbUtils_1 = __importDefault(require("../utils/dbUtils"));
const _index_1 = __importDefault(require("../models/_index"));
const constUtil_1 = require("../utils/constUtil");
async function migrateDatabase() {
    try {
        await dbUtils_1.default.authenticate();
        console.log("Koneksi berhasil.");
        const backupFilePath = path_1.default.join(__dirname, `backups/${constUtil_1.BACKUP_FILE_NAME_FOR_MIGRATION}`);
        try {
            await fs_1.promises.access(backupFilePath);
        }
        catch {
            throw new Error(`File backup tidak ditemukan: ${backupFilePath}`);
        }
        const backupData = JSON.parse(await fs_1.promises.readFile(backupFilePath, "utf-8"));
        for (const [modelName, records] of Object.entries(backupData)) {
            const model = _index_1.default.find((m) => m.name === modelName);
            if (model) {
                await model.destroy({ where: {} });
                console.log(`Data lama untuk model ${modelName} telah dihapus.`);
                for (const record of records) {
                    await model.create(record);
                    console.log(`Data untuk model ${modelName} telah ditambahkan: ${record.id}`);
                }
            }
            else {
                console.warn(`Model ${modelName} tidak ditemukan.`);
            }
        }
        console.log("Migrasi selesai.");
    }
    catch (error) {
        console.error("Gagal melakukan migrasi:", error);
    }
    finally {
        await dbUtils_1.default.close();
    }
}
(async () => {
    await migrateDatabase();
})();
//# sourceMappingURL=migrate.js.map