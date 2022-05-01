import { Body, Controller, Post } from "@nestjs/common";
import { ArduinoService } from "./arduino.service";
import { CreateArduinoConfigurationDto } from "./dtos/create-arduino-configuration.dto";

@Controller("/api/arduino")
export class ArduinoController {
  constructor(private arduinoService: ArduinoService) {
  }

  @Post("/")
  create(@Body() data: CreateArduinoConfigurationDto) {
    return this.arduinoService.create(data);
  }
}
