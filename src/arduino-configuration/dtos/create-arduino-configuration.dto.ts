import {SerialportDto} from "./serialport.dto";

export class CreateArduinoConfigurationDto {
    name: string;
    path: string;
    serialports: SerialportDto[];
}
