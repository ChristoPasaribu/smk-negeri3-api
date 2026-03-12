import { ProgramKeahlianService } from './program-keahlian.service';
import { CreateProgramKeahlianDto, UpdateProgramKeahlianDto } from './program-keahlian.dto';
export declare class ProgramKeahlianController {
    private readonly service;
    constructor(service: ProgramKeahlianService);
    findAll(): Promise<import("sequelize").Model<any, any>[]>;
    findOne(id: string): Promise<import("sequelize").Model<any, any>>;
    create(dto: CreateProgramKeahlianDto): Promise<import("sequelize").Model<any, any>>;
    update(id: string, dto: UpdateProgramKeahlianDto): Promise<import("sequelize").Model<any, any>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
