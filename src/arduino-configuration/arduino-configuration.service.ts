import {v4 as uuidv4} from 'uuid';
import {Injectable} from "@nestjs/common";
import {DatabaseService} from "../database/database.service";
import {CreateArduinoConfigurationDto} from "./dtos/create-arduino-configuration.dto";
import {ArduinoConfigurationDto} from "./dtos/arduino-configuration.dto";
import {classToPlain} from "class-transformer";
import {UpdateArduinoConfigurationDto} from "./dtos/update-arduino-configuration.dto";

@Injectable()
export class ArduinoConfigurationService {
    constructor(private databaseService: DatabaseService) {
    }

    async create(createDto: CreateArduinoConfigurationDto): Promise<ArduinoConfigurationDto> {
        const dto = new ArduinoConfigurationDto(classToPlain(createDto));

        dto.uuid = uuidv4();

        this.databaseService.db.data.arduinoConfigurations.push(dto);
        await this.databaseService.db.write();

        return dto;
    }

    firstByName(name: string): undefined | ArduinoConfigurationDto {
        return this.databaseService.db.data.arduinoConfigurations.find(ele => {
            return ele.name === name;
        });
    }

    firstByPath(path: string): undefined | ArduinoConfigurationDto {
        return this.databaseService.db.data.arduinoConfigurations.find(ele => {
            return ele.path === path;
        });
    }

    firstByUuid(uuid: string): undefined | ArduinoConfigurationDto {
        return this.databaseService.db.data.arduinoConfigurations.find(ele => {
            return ele.uuid === uuid;
        });
    }

    all(): ArduinoConfigurationDto[] {
        return this.databaseService.db.data.arduinoConfigurations;
    }

    async update(dto: UpdateArduinoConfigurationDto): Promise<void> {
        const indexOf = this.databaseService.db.data.arduinoConfigurations.findIndex(ele => {
            return ele.uuid === dto.uuid;
        });

        this.databaseService.db.data.arduinoConfigurations[indexOf] = dto;

        await this.databaseService.db.write();
    }

    async remove(uuid: string) {
        const indexOf = this.databaseService.db.data.arduinoConfigurations.findIndex(ele => {
            return ele.uuid === uuid;
        });

        this.databaseService.db.data.arduinoConfigurations.splice(indexOf, 1);

        await this.databaseService.db.write();
    }
}
