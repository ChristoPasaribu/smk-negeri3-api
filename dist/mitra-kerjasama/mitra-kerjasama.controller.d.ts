import { MitraKerjasamaService } from './mitra-kerjasama.service';
import { CreateMitraKerjasamaDto, UpdateMitraKerjasamaDto } from './mitra-kerjasama.dto';
export declare class MitraKerjasamaController {
    private readonly service;
    constructor(service: MitraKerjasamaService);
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(dto: CreateMitraKerjasamaDto, file?: Express.Multer.File): Promise<import("sequelize").Model<any, any>>;
    update(id: string, dto: UpdateMitraKerjasamaDto, file?: Express.Multer.File): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
