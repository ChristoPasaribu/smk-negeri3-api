import { StrukturOrganisasiService } from './struktur-organisasi.service';
export declare class StrukturOrganisasiController {
    private readonly service;
    constructor(service: StrukturOrganisasiService);
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(file: Express.Multer.File): Promise<import("sequelize").Model<any, any>>;
    update(id: string, file: Express.Multer.File): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
