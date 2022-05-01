import { Injectable } from "@nestjs/common";
import { CreateArduinoConfigurationDto } from "./dtos/create-arduino-configuration.dto";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePinoutDto } from "./dtos/create-pinout.dto";
import { PinoutDto } from "./dtos/pinout.dto";
import { ArduinoConfigurationDto } from "./dtos/arduino-configuration.dto";

@Injectable()
export class ArduinoService {
  constructor(private prismaService: PrismaService) {
  }

  async create(data: CreateArduinoConfigurationDto) {
    const result = await this.prismaService.arduinoConfiguration.create({ data });

    const dto = new ArduinoConfigurationDto(result);

    const pinouts: CreatePinoutDto[] = data.pinouts.map(ele => new CreatePinoutDto({
      ...ele,
      arduinoConfigurationId: result.id
    }));

    for (const pinout of pinouts) {
      dto.pinouts.push(await this.createPinout(pinout));
    }

    return dto;
  }

  async createPinout(dto: CreatePinoutDto) {
    const result = await this.prismaService.pinout.create({ data: dto });

    if (result == null) return null;

    return new PinoutDto(result);
  }
}
