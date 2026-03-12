"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimestamp = exports.ensureDirectoryExistence = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const moment_1 = __importDefault(require("moment"));
const ensureDirectoryExistence = async (filePath) => {
    const dirname = path_1.default.dirname(filePath);
    try {
        await promises_1.default.mkdir(dirname, { recursive: true });
    }
    catch (error) {
        console.error("Terjadi kesalahan saat memastikan keberadaan direktori:", error);
    }
};
exports.ensureDirectoryExistence = ensureDirectoryExistence;
const getTimestamp = () => {
    return (0, moment_1.default)().format("YYYY-MM-DD_HH-mm-ss");
};
exports.getTimestamp = getTimestamp;
//# sourceMappingURL=toolsUtil.js.map