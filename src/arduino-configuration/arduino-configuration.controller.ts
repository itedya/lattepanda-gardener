import {Body, Controller, Get, Post, Put, Query} from "@nestjs/common";
import {CreateArduinoConfigurationDto} from "./dtos/create-arduino-configuration.dto";
import {ArduinoConfigurationService} from "./arduino-configuration.service";
import {ArduinoConfigurationDto} from "./dtos/arduino-configuration.dto";
import {GetArduinoConfigurationRequestParamsDto} from "./dtos/get-arduino-configuration-request-params.dto";
import {UpdateArduinoConfigurationDto} from "./dtos/update-arduino-configuration.dto";

@Controller("/api/arduino-configurations")
export class ArduinoConfigurationController {
    constructor(private arduinoConfigurationService: ArduinoConfigurationService) {
    }

    @Post("/")
    async create(@Body() createDto: CreateArduinoConfigurationDto): Promise<ArduinoConfigurationDto> {
        return this.arduinoConfigurationService.create(createDto);
    }

    @Get("/")
    async get(@Query() queryParams: GetArduinoConfigurationRequestParamsDto) {
        if (queryParams.uuid) {
            return this.arduinoConfigurationService.firstByUuid(queryParams.uuid);
        }

        return this.arduinoConfigurationService.all();
    }

    @Put("/")
    async update(@Body() updateDto: UpdateArduinoConfigurationDto) {
        await this.arduinoConfigurationService.update(updateDto);
    }
}
