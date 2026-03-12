"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbUtils_1 = __importDefault(require("../utils/dbUtils"));
require("../models/_index");
async function syncDB() {
    try {
        console.log("Sedang melakukan sinkronisasi data...");
        await dbUtils_1.default.sync({ alter: true });
        console.log("Berhasil melakukan sinkronisasi database.");
    }
    catch (error) {
        console.error("Gagal melakukan sinkronisasi database: ", error);
    }
    finally {
        await dbUtils_1.default.close();
    }
}
(async () => {
    await syncDB();
})();
//# sourceMappingURL=sync.js.map