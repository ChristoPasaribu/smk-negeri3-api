import fs from "fs/promises";
import path from "path";
import moment from "moment";

export const ensureDirectoryExistence = async (
  filePath: string
): Promise<void> => {
  const dirname = path.dirname(filePath);
  try {
    await fs.mkdir(dirname, { recursive: true });
  } catch (error) {
    console.error(
      "Terjadi kesalahan saat memastikan keberadaan direktori:",
      error
    );
  }
};

// Fungsi untuk mendapatkan timestamp dengan moment
export const getTimestamp = (): string => {
  return moment().format("YYYY-MM-DD_HH-mm-ss");
};

/**
 * Normalize file path dari multer agar bisa diakses browser.
 * Windows menyimpan path dengan backslash: uploads\folder\file.png
 * Browser butuh forward slash:             uploads/folder/file.png
 */
export const normalizePath = (filePath: string): string => {
  return filePath.replace(/\\/g, '/');
};
