import { SejarahIdentitasService } from './sejarah-identitas.service';
import { CreateSejarahIdentitasDto, UpdateSejarahIdentitasDto } from './sejarah-identitas.dto';
export declare class SejarahIdentitasController {
    private readonly service;
    constructor(service: SejarahIdentitasService);
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(dto: CreateSejarahIdentitasDto): Promise<import("sequelize").Model<any, any>>;
    update(id: string, dto: UpdateSejarahIdentitasDto): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
