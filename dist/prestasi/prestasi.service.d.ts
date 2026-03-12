import { CreatePrestasiDto, UpdatePrestasiDto } from './prestasi.dto';
export declare class PrestasiService {
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(dto: CreatePrestasiDto): Promise<import("sequelize").Model<any, any>>;
    update(id: string, dto: UpdatePrestasiDto): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
