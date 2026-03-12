export declare class StrukturOrganisasiService {
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(gambar: string): Promise<import("sequelize").Model<any, any>>;
    update(id: string, gambar: string): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
