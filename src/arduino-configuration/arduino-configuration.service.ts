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
        const db = this.databaseService.getDatabase();

        const dto = new ArduinoConfigurationDto(classToPlain(createDto));

        db.data.arduinoConfigurations.push(dto);
        await db.write();

        return dto;
    }
}
