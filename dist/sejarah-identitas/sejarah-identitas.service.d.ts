import { CreateSejarahIdentitasDto, UpdateSejarahIdentitasDto } from './sejarah-identitas.dto';
export declare class SejarahIdentitasService {
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(dto: CreateSejarahIdentitasDto): Promise<import("sequelize").Model<any, any>>;
    update(id: string, dto: UpdateSejarahIdentitasDto): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
