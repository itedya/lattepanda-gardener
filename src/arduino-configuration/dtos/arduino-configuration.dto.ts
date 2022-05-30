import {SerialportDto} from "./serialport.dto";

export class ArduinoConfigurationDto {
    constructor(data: Partial<ArduinoConfigurationDto>) {
        if (data.uuid) this.uuid = data.uuid;
        if (data.name) this.name = data.name;
        if (data.path) this.path = data.path;
        if (data.serialports) this.serialports = data.serialports;
    }

    uuid: string;

    name: string;
    path: string;
    serialports: SerialportDto[];
}
