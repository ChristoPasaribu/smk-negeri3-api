import { CreateFasilitasDto, UpdateFasilitasDto } from './fasilitas.dto';
export declare class FasilitasService {
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(dto: CreateFasilitasDto, fotoPath?: string): Promise<import("sequelize").Model<any, any>>;
    update(id: string, dto: UpdateFasilitasDto, fotoPath?: string): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
