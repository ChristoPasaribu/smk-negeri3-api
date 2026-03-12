import { CreateMitraKerjasamaDto, UpdateMitraKerjasamaDto } from './mitra-kerjasama.dto';
export declare class MitraKerjasamaService {
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(dto: CreateMitraKerjasamaDto, logoPath?: string): Promise<import("sequelize").Model<any, any>>;
    update(id: string, dto: UpdateMitraKerjasamaDto, logoPath?: string): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
