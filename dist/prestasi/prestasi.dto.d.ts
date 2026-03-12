export declare class CreatePrestasiDto {
    judul: string;
    tingkat: 'kabupaten' | 'provinsi' | 'nasional' | 'internasional';
    tahun: string;
    keterangan?: string;
}
export declare class UpdatePrestasiDto {
    judul?: string;
    tingkat?: 'kabupaten' | 'provinsi' | 'nasional' | 'internasional';
    tahun?: string;
    keterangan?: string;
}
