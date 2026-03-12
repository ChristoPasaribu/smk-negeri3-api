import { VisiMisiService } from './visi-misi.service';
import { CreateVisiMisiDto, UpdateVisiMisiDto } from './visi-misi.dto';
export declare class VisiMisiController {
    private readonly service;
    constructor(service: VisiMisiService);
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(dto: CreateVisiMisiDto): Promise<import("sequelize").Model<any, any>>;
    update(id: string, dto: UpdateVisiMisiDto): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
