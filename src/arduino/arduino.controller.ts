import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get, ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors
} from "@nestjs/common";
import { ArduinoService } from "./arduino.service";
import {CreateArduinoConfigurationDto} from "./dtos/create-arduino-configuration.dto";
import {UpdateArduinoConfigurationDto} from "./dtos/update-arduino-configuration.dto";

@UseInterceptors(ClassSerializerInterceptor)
@Controller("/api/arduino")
export class ArduinoController {
  constructor(private arduinoService: ArduinoService) {
  }

  @Get("/")
  all() {
    return this.arduinoService.all();
  }

  @Post("/")
  create(@Body() data: CreateArduinoConfigurationDto) {
    return this.arduinoService.create(data);
  }

  @Put("/")
  update(@Body() data: UpdateArduinoConfigurationDto) {
    return this.arduinoService.update(data);
  }

  @Delete("/")
  remove(@Query("id", ParseIntPipe) id: number) {
    return this.arduinoService.remove(id);
  }
}
