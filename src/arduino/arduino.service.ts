import {Injectable} from "@nestjs/common";
import {CreateArduinoConfigurationDto} from "./dtos/create-arduino-configuration.dto";
import {PrismaService} from "../prisma/prisma.service";
import {CreatePinoutDto} from "./dtos/create-pinout.dto";
import {PinoutDto} from "./dtos/pinout.dto";
import {ArduinoConfigurationDto} from "./dtos/arduino-configuration.dto";
import {doesNotReject} from "assert";
import {
    ArduinoConfigurationNameIsNotUniqueException
} from "./exceptions/arduino-configuration-name-is-not-unique.exception";
import {
    ArduinoConfigurationSerialportIsNotUniqueException
} from "./exceptions/arduino-configuration-serialport-is-not-unique.exception";

@Injectable()
export class ArduinoService {
    constructor(private prismaService: PrismaService) {
    }

    async create(data: CreateArduinoConfigurationDto) {
        const result = await this.prismaService.arduinoConfiguration.create({
            data: {
                name: data.name,
                serialport: data.serialport,
            }
        })
            .catch(err => {
                if (ArduinoConfigurationNameIsNotUniqueException.isInstanceOf(err)) {
                    throw new ArduinoConfigurationNameIsNotUniqueException();
                } else if (ArduinoConfigurationSerialportIsNotUniqueException.isInstanceOf(err)) {
                    throw new ArduinoConfigurationSerialportIsNotUniqueException();
                }

                throw err;
            });

        const arduinoDto = new ArduinoConfigurationDto(result);

        for (const payload of data.pinouts) {
            const pinout = await this.createPinout(payload, result.id);

            arduinoDto.pinouts.push(pinout);
        }

        return new ArduinoConfigurationDto(result);
    }

    async createPinout(dto: CreatePinoutDto, arduinoConfigurationId: number) {
        const result = await this.prismaService.pinout.create({data: {...dto, arduinoConfigurationId}});

        if (result == null) return null;

        return new PinoutDto(result);
    }

    async all() {
        const result = await this.prismaService.arduinoConfiguration.findMany({});

        if (result === null) return null;

        return result.map(ele => new ArduinoConfigurationDto(ele));
    }
}
