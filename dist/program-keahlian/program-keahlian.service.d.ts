import { CreateProgramKeahlianDto, UpdateProgramKeahlianDto } from './program-keahlian.dto';
export declare class ProgramKeahlianService {
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(dto: CreateProgramKeahlianDto): Promise<import("sequelize").Model<any, any>>;
    update(id: string, dto: UpdateProgramKeahlianDto): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
