import {Body, Controller, Post} from "@nestjs/common";
import {CreateArduinoConfigurationDto} from "./dtos/create-arduino-configuration.dto";
import {ArduinoConfigurationService} from "./arduino-configuration.service";
import {ArduinoConfigurationDto} from "./dtos/arduino-configuration.dto";

@Controller("/api/arduino-configurations")
export class ArduinoConfigurationController {
    constructor(private arduinoConfigurationService: ArduinoConfigurationService) {
    }

    @Post("/")
    async create(@Body() createDto: CreateArduinoConfigurationDto): Promise<ArduinoConfigurationDto> {
        return this.arduinoConfigurationService.create(createDto);
    }
}
