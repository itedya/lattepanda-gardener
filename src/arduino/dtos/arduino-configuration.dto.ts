import { PinoutDto } from "./pinout.dto";

export class ArduinoConfigurationDto {
  constructor(data: Partial<ArduinoConfigurationDto>) {
    if (data.id) this.id = data.id;
    if (data.name) this.name = data.name;
    if (data.serialport) this.serialport = data.serialport;
    if (data.pinouts) this.pinouts = data.pinouts;
  }

  id: number;
  name: string;
  serialport: string;
  pinouts: PinoutDto[] = [];
}
