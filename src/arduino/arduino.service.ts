import {Injectable} from "@nestjs/common";
import {CreateArduinoConfigurationDto} from "./dtos/create-arduino-configuration.dto";
import {PrismaService} from "../prisma/prisma.service";
import {CreatePinoutDto} from "./dtos/create-pinout.dto";
import {PinoutDto} from "./dtos/pinout.dto";
import {ArduinoConfigurationDto} from "./dtos/arduino-configuration.dto";
import {
    ArduinoConfigurationNameIsNotUniqueException
} from "./exceptions/arduino-configuration-name-is-not-unique.exception";
import {
    ArduinoConfigurationSerialportIsNotUniqueException
} from "./exceptions/arduino-configuration-serialport-is-not-unique.exception";
import {UpdateArduinoConfigurationDto} from "./dtos/update-arduino-configuration.dto";
import {
    ArduinoConfigurationWithThatIdDoesNotExist
} from "./exceptions/arduino-configuration-with-that-id-does-not-exist";

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

        return arduinoDto
    }

    async createPinout(dto: CreatePinoutDto, arduinoConfigurationId: number) {
        const result = await this.prismaService.pinout.create({data: {...dto, arduinoConfigurationId}});

        if (result == null) return null;

        return new PinoutDto(result);
    }

    async update(dto: UpdateArduinoConfigurationDto) {
        await this.removePinoutsForId(dto.id);

        const arduinoDto = await this.prismaService.arduinoConfiguration.update({
            where: { id: dto.id },
            data: {
                name: dto.name,
                serialport: dto.serialport
            }
        })
            .then(res => new ArduinoConfigurationDto(res))
            .catch(err => {
                if (ArduinoConfigurationWithThatIdDoesNotExist.isInstanceOf(err)) {
                    throw new ArduinoConfigurationWithThatIdDoesNotExist();
                }

                throw err;
            });

        for (const payload of dto.pinouts) {
            const pinout = await this.createPinout(payload, dto.id);
            arduinoDto.pinouts.push(pinout);
        }

        return arduinoDto;
    }

    // async allPinoutsForId(arduinoConfigurationId: number): Promise<PinoutDto[]> {
    //     return this.prismaService.pinout.findMany({
    //         where: { arduinoConfigurationId }
    //     }).then(res => res.map(ele => new PinoutDto(ele)));
    // }


    async removePinoutsForId(arduinoConfigurationId: number) {
        return this.prismaService.pinout.deleteMany({ where: { arduinoConfigurationId } });
    }

    async all() {
        const result = await this.prismaService.arduinoConfiguration.findMany({});

        if (result === null) return null;

        return result.map(ele => new ArduinoConfigurationDto(ele));
    }
}
