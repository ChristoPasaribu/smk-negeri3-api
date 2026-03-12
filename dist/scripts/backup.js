"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbUtils_1 = __importDefault(require("../utils/dbUtils"));
const toolsUtil_1 = require("../utils/toolsUtil");
const _index_1 = __importDefault(require("../models/_index"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function backupDatabase() {
    try {
        await dbUtils_1.default.authenticate();
        console.log("Koneksi berhasil.");
        const backupData = {};
        for (const model of _index_1.default) {
            const records = await model.findAll();
            backupData[model.name] = records.map((record) => record.toJSON());
        }
        const dbName = process.env.DB_NAME || "database";
        const timestamp = (0, toolsUtil_1.getTimestamp)();
        const fileName = path_1.default.resolve(__dirname, `../backups/${dbName}_backup_${timestamp}.json`);
        await (0, toolsUtil_1.ensureDirectoryExistence)(fileName);
        fs_1.default.writeFileSync(fileName, JSON.stringify(backupData, null, 2), "utf-8");
        console.log("Backup selesai.");
        console.log(`File disimpan sebagai ${fileName}`);
    }
    catch (error) {
        console.error("Gagal melakukan backup:", error);
    }
    finally {
        await dbUtils_1.default.close();
    }
}
backupDatabase();
//# sourceMappingURL=backup.js.map