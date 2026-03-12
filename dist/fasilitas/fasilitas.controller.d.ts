import { FasilitasService } from './fasilitas.service';
import { CreateFasilitasDto, UpdateFasilitasDto } from './fasilitas.dto';
export declare class FasilitasController {
    private readonly service;
    constructor(service: FasilitasService);
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(dto: CreateFasilitasDto, file?: Express.Multer.File): Promise<import("sequelize").Model<any, any>>;
    update(id: string, dto: UpdateFasilitasDto, file?: Express.Multer.File): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
