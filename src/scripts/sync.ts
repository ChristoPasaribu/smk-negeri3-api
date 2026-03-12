import db from "../utils/dbUtils";
import "../models/_index";

async function syncDB(): Promise<void> {
  try {
    console.log("Sedang melakukan sinkronisasi data...");

    // --- PERUBAHAN DI SINI ---
    // Gunakan force: true untuk menghapus tabel lama dan buat ulang
    // agar kolom baru (nama_penilai, dll) bisa masuk tanpa error.
    await db.sync({ alter: true });
    // -------------------------

    console.log("Berhasil melakukan sinkronisasi database.");
  } catch (error) {
    console.error("Gagal melakukan sinkronisasi database: ", error);
  } finally {
    // Tutup koneksi agar Node.js bisa exit
    await db.close();
  }
}

(async () => {
  await syncDB();
})();
