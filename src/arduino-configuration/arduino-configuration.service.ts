import {v4 as uuidv4} from 'uuid';
import {Injectable} from "@nestjs/common";
import {DatabaseService} from "../database/database.service";
import {CreateArduinoConfigurationDto} from "./dtos/create-arduino-configuration.dto";
import {ArduinoConfigurationDto} from "./dtos/arduino-configuration.dto";
import {classToPlain} from "class-transformer";

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

    firstByPath(path: string) {
        return this.databaseService.db.data.arduinoConfigurations.find(ele => {
            return ele.path === path;
        });
    }
}
